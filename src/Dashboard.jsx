import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Play, Share2, Clock, Calendar, Trash2, Edit2, Check, X, Eye, Download, FileText, MessageSquare, Star, Tag as TagIcon } from 'lucide-react';
import { signInUser, getUserSessions, auth, deleteSession, updateSession, getUserFolders, createFolder, updateFolder, deleteFolder, toggleFavorite, updateSessionTags, bulkDeleteSessions, bulkMoveToFolder, bulkAddTags } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { extractTagsFromSessions, searchSessions } from './utils/searchUtils';
import AlertDialog from './components/AlertDialog';
import ConfirmDialog from './components/ConfirmDialog';
import RatingStars from './components/RatingStars';
import ViewToggle from './components/ViewToggle';
import ThemeSelector from './components/ThemeSelector';
import SearchBar from './components/SearchBar';
import SessionFilters from './components/SessionFilters';
import FolderSidebar from './components/FolderSidebar';
import FolderDialog from './components/FolderDialog';
import TagFilter from './components/TagFilter';
import TagInput from './components/TagInput';
import BulkActionsToolbar from './components/BulkActionsToolbar';

const Dashboard = () => {
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [editingName, setEditingName] = useState('');
    const [editingTags, setEditingTags] = useState([]);

    // Organization states
    const [folders, setFolders] = useState([]);
    const [selectedFolder, setSelectedFolder] = useState('all');
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() =>
        localStorage.getItem('sidebar-collapsed') === 'true'
    );
    const [folderDialogOpen, setFolderDialogOpen] = useState(false);
    const [editingFolder, setEditingFolder] = useState(null);

    // Tag states
    const [selectedTags, setSelectedTags] = useState([]);

    // Bulk operation states
    const [selectedSessions, setSelectedSessions] = useState([]);
    const [tagDialogOpen, setTagDialogOpen] = useState(false);
    const [bulkTags, setBulkTags] = useState([]);
    const [isSavingTags, setIsSavingTags] = useState(false);

    // View and filter states
    const [view, setView] = useState(() => localStorage.getItem('dashboard-view') || 'grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [filters, setFilters] = useState({
        dateRange: 'all',
        duration: 'all',
        minRating: 0,
        hasTranscription: false,
        hasComments: false
    });

    // Dialog states
    const [alertDialog, setAlertDialog] = useState({ isOpen: false, type: 'info', title: '', message: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', message: '', onConfirm: null });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                loadSessions(currentUser.uid);
                loadFolders(currentUser.uid);
            } else {
                try {
                    const newUser = await signInUser();
                    setUser(newUser);
                    // New user won't have sessions, but we're ready
                    setLoading(false);
                } catch (error) {
                    console.error("Auth error:", error);
                    setLoading(false);
                }
            }
        });

        return () => unsubscribe();
    }, []);

    // Save sidebar collapsed state
    useEffect(() => {
        localStorage.setItem('sidebar-collapsed', isSidebarCollapsed);
    }, [isSidebarCollapsed]);

    const loadSessions = async (userId) => {
        try {
            const userSessions = await getUserSessions(userId);
            setSessions(userSessions);
        } catch (error) {
            console.error("Error loading sessions:", error);
            if (error.message.includes("index")) {
                alert("Falta un índice en Firestore. Revisa la consola para ver el enlace de creación.");
            }
        } finally {
            setLoading(false);
        }
    };

    const loadFolders = async (userId) => {
        try {
            const userFolders = await getUserFolders(userId);
            setFolders(userFolders);
        } catch (error) {
            console.error("Error loading folders:", error);
        }
    };

    const formatDuration = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return '';
        // Handle Firestore Timestamp or ISO string
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const copyShareLink = (e, sessionId) => {
        e.preventDefault();
        e.stopPropagation();
        const url = `${window.location.origin}/econotas/share/${sessionId}`;
        navigator.clipboard.writeText(url);
        setAlertDialog({
            isOpen: true,
            type: 'success',
            title: 'Enlace copiado',
            message: `El enlace se copió al portapapeles: ${url}`
        });
    };

    const handleDeleteSession = (e, session) => {
        e.preventDefault();
        e.stopPropagation();
        setConfirmDialog({
            isOpen: true,
            title: '¿Eliminar sesión?',
            message: `¿Estás seguro de que deseas eliminar "${session.sessionName}"? Esta acción no se puede deshacer.`,
            variant: 'destructive',
            onConfirm: async () => {
                try {
                    await deleteSession(session.id);
                    setSessions(prev => prev.filter(s => s.id !== session.id));
                    setAlertDialog({
                        isOpen: true,
                        type: 'success',
                        title: 'Sesión eliminada',
                        message: 'La sesión se eliminó correctamente.'
                    });
                } catch (error) {
                    console.error('Error deleting session:', error);
                    setAlertDialog({
                        isOpen: true,
                        type: 'error',
                        title: 'Error',
                        message: `No se pudo eliminar la sesión: ${error.message}`
                    });
                }
            }
        });
    };

    const startEditing = (e, session) => {
        e.preventDefault();
        e.stopPropagation();
        setEditingId(session.id);
        setEditingName(session.sessionName);
    };

    const saveEdit = async (e, sessionId) => {
        e.preventDefault();
        e.stopPropagation();
        if (!editingName.trim()) {
            setAlertDialog({
                isOpen: true,
                type: 'warning',
                title: 'Nombre requerido',
                message: 'El nombre de la sesión no puede estar vacío.'
            });
            return;
        }

        try {
            await updateSession(sessionId, { sessionName: editingName });
            setSessions(prev => prev.map(s =>
                s.id === sessionId ? { ...s, sessionName: editingName } : s
            ));
            setEditingId(null);
            setEditingName('');
        } catch (error) {
            console.error('Error updating session:', error);
            setAlertDialog({
                isOpen: true,
                type: 'error',
                title: 'Error',
                message: `No se pudo actualizar la sesión: ${error.message}`
            });
        }
    };

    const cancelEdit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setEditingId(null);
        setEditingName('');
        setEditingTags([]);
    };

    // Folder handlers
    const handleCreateFolder = async (folderData) => {
        if (!user) return;
        try {
            const folderId = await createFolder({
                userId: user.uid,
                ...folderData
            });
            await loadFolders(user.uid);
            setAlertDialog({
                isOpen: true,
                type: 'success',
                title: 'Carpeta creada',
                message: `La carpeta "${folderData.name}" se creó correctamente.`
            });
        } catch (error) {
            console.error('Error creating folder:', error);
            setAlertDialog({
                isOpen: true,
                type: 'error',
                title: 'Error',
                message: 'No se pudo crear la carpeta.'
            });
        }
    };

    const handleEditFolder = (folder) => {
        setEditingFolder(folder);
        setFolderDialogOpen(true);
    };

    const handleSaveFolder = async (folderData) => {
        if (!editingFolder) return;
        try {
            await updateFolder(editingFolder.id, folderData);
            await loadFolders(user.uid);
            setEditingFolder(null);
            setAlertDialog({
                isOpen: true,
                type: 'success',
                title: 'Carpeta actualizada',
                message: 'Los cambios se guardaron correctamente.'
            });
        } catch (error) {
            console.error('Error updating folder:', error);
            setAlertDialog({
                isOpen: true,
                type: 'error',
                title: 'Error',
                message: 'No se pudo actualizar la carpeta.'
            });
        }
    };

    const handleDeleteFolder = (folder) => {
        setConfirmDialog({
            isOpen: true,
            title: '¿Eliminar carpeta?',
            message: `¿Estás seguro de que deseas eliminar "${folder.name}"? Las sesiones se moverán a "Todas las sesiones".`,
            variant: 'destructive',
            onConfirm: async () => {
                try {
                    await deleteFolder(folder.id);
                    await loadFolders(user.uid);
                    await loadSessions(user.uid);
                    if (selectedFolder === folder.id) {
                        setSelectedFolder('all');
                    }
                    setAlertDialog({
                        isOpen: true,
                        type: 'success',
                        title: 'Carpeta eliminada',
                        message: 'La carpeta se eliminó correctamente.'
                    });
                } catch (error) {
                    console.error('Error deleting folder:', error);
                    setAlertDialog({
                        isOpen: true,
                        type: 'error',
                        title: 'Error',
                        message: 'No se pudo eliminar la carpeta.'
                    });
                }
            }
        });
    };

    // Tag handlers
    const handleUpdateTags = async (sessionId, tags) => {
        try {
            await updateSessionTags(sessionId, tags);
            setSessions(prev => prev.map(s =>
                s.id === sessionId ? { ...s, tags } : s
            ));
        } catch (error) {
            console.error('Error updating tags:', error);
            setAlertDialog({
                isOpen: true,
                type: 'error',
                title: 'Error',
                message: 'No se pudieron actualizar las etiquetas.'
            });
        }
    };

    // Favorite handler
    const handleToggleFavorite = async (e, session) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            const newFavoriteStatus = !session.isFavorite;
            await toggleFavorite(session.id, newFavoriteStatus);
            setSessions(prev => prev.map(s =>
                s.id === session.id ? { ...s, isFavorite: newFavoriteStatus } : s
            ));
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    // Bulk operation handlers
    const handleSelectSession = (sessionId, isSelected) => {
        if (isSelected) {
            setSelectedSessions(prev => [...prev, sessionId]);
        } else {
            setSelectedSessions(prev => prev.filter(id => id !== sessionId));
        }
    };

    const handleSelectAll = (isSelected) => {
        if (isSelected) {
            setSelectedSessions(filteredAndSortedSessions.map(s => s.id));
        } else {
            setSelectedSessions([]);
        }
    };

    const handleBulkDelete = () => {
        setConfirmDialog({
            isOpen: true,
            title: '¿Eliminar sesiones?',
            message: `¿Estás seguro de que deseas eliminar ${selectedSessions.length} sesión${selectedSessions.length !== 1 ? 'es' : ''}? Esta acción no se puede deshacer.`,
            variant: 'destructive',
            onConfirm: async () => {
                try {
                    await bulkDeleteSessions(selectedSessions);
                    setSessions(prev => prev.filter(s => !selectedSessions.includes(s.id)));
                    setSelectedSessions([]);
                    setAlertDialog({
                        isOpen: true,
                        type: 'success',
                        title: 'Sesiones eliminadas',
                        message: 'Las sesiones se eliminaron correctamente.'
                    });
                } catch (error) {
                    console.error('Error bulk deleting:', error);
                    setAlertDialog({
                        isOpen: true,
                        type: 'error',
                        title: 'Error',
                        message: 'No se pudieron eliminar las sesiones.'
                    });
                }
            }
        });
    };

    const handleBulkMoveToFolder = async (folderId) => {
        try {
            await bulkMoveToFolder(selectedSessions, folderId);
            setSessions(prev => prev.map(s =>
                selectedSessions.includes(s.id) ? { ...s, folderId } : s
            ));
            setSelectedSessions([]);
            setAlertDialog({
                isOpen: true,
                type: 'success',
                title: 'Sesiones movidas',
                message: 'Las sesiones se movieron correctamente.'
            });
        } catch (error) {
            console.error('Error bulk moving:', error);
            setAlertDialog({
                isOpen: true,
                type: 'error',
                title: 'Error',
                message: 'No se pudieron mover las sesiones.'
            });
        }
    };

    const handleBulkAddTags = () => {
        setBulkTags([]);
        setTagDialogOpen(true);
    };

    const handleSaveBulkTags = async () => {
        console.log('handleSaveBulkTags called', { bulkTags, selectedSessions });
        if (bulkTags.length === 0) {
            console.warn('No tags to save');
            setAlertDialog({
                isOpen: true,
                type: 'warning',
                title: 'Sin etiquetas',
                message: 'Por favor agrega al menos una etiqueta antes de guardar.'
            });
            return;
        }
        if (selectedSessions.length === 0) {
            console.warn('No sessions selected');
            setAlertDialog({
                isOpen: true,
                type: 'warning',
                title: 'Sin sesiones',
                message: 'No hay sesiones seleccionadas.'
            });
            return;
        }

        setIsSavingTags(true);
        try {
            console.log('Calling bulkAddTags...');
            await bulkAddTags(selectedSessions, bulkTags);
            console.log('bulkAddTags completed, reloading sessions...');
            // Reload sessions to get updated tags
            await loadSessions(user.uid);
            console.log('Sessions reloaded');
            setSelectedSessions([]);
            setTagDialogOpen(false);
            setBulkTags([]);
            setAlertDialog({
                isOpen: true,
                type: 'success',
                title: 'Etiquetas agregadas',
                message: 'Las etiquetas se agregaron correctamente.'
            });
        } catch (error) {
            console.error('Error bulk adding tags:', error);
            setAlertDialog({
                isOpen: true,
                type: 'error',
                title: 'Error',
                message: `No se pudieron agregar las etiquetas: ${error.message}`
            });
        } finally {
            setIsSavingTags(false);
        }
    };

    // Save view preference
    useEffect(() => {
        localStorage.setItem('dashboard-view', view);
    }, [view]);

    // Filter and sort sessions
    const filteredAndSortedSessions = useMemo(() => {
        let filtered = [...sessions];

        // Folder filter
        if (selectedFolder === 'favorites') {
            filtered = filtered.filter(s => s.isFavorite === true);
        } else if (selectedFolder !== 'all') {
            filtered = filtered.filter(s => s.folderId === selectedFolder);
        }

        // Tag filter
        if (selectedTags.length > 0) {
            filtered = filtered.filter(session => {
                const sessionTags = session.tags || [];
                return selectedTags.some(tag => sessionTags.includes(tag));
            });
        }

        // Search filter
        if (searchQuery.trim()) {
            filtered = searchSessions(searchQuery, filtered, 'all');
        }

        // Date range filter
        if (filters.dateRange !== 'all') {
            const now = new Date();
            const ranges = {
                today: 24 * 60 * 60 * 1000,
                week: 7 * 24 * 60 * 60 * 1000,
                month: 30 * 24 * 60 * 60 * 1000,
                year: 365 * 24 * 60 * 60 * 1000
            };
            const range = ranges[filters.dateRange];
            if (range) {
                filtered = filtered.filter(s => {
                    const sessionDate = s.createdAt?.toDate ? s.createdAt.toDate() : new Date(s.createdAt);
                    return (now - sessionDate) <= range;
                });
            }
        }

        // Duration filter
        if (filters.duration !== 'all') {
            filtered = filtered.filter(s => {
                const minutes = s.durationMs / 60000;
                if (filters.duration === 'short') return minutes < 15;
                if (filters.duration === 'medium') return minutes >= 15 && minutes <= 60;
                if (filters.duration === 'long') return minutes > 60;
                return true;
            });
        }

        // Rating filter
        if (filters.minRating > 0) {
            filtered = filtered.filter(s =>
                (s.ratingAverage || 0) >= filters.minRating
            );
        }

        // Transcription filter
        if (filters.hasTranscription) {
            filtered = filtered.filter(s => s.transcription);
        }

        // Comments filter
        if (filters.hasComments) {
            filtered = filtered.filter(s => (s.commentCount || 0) > 0);
        }

        // Sort
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return (b.createdAt?.toDate?.() || new Date(b.createdAt)) - (a.createdAt?.toDate?.() || new Date(a.createdAt));
                case 'oldest':
                    return (a.createdAt?.toDate?.() || new Date(a.createdAt)) - (b.createdAt?.toDate?.() || new Date(b.createdAt));
                case 'mostViewed':
                    return (b.viewCount || 0) - (a.viewCount || 0);
                case 'topRated':
                    return (b.ratingAverage || 0) - (a.ratingAverage || 0);
                case 'alphabetical':
                    return a.sessionName.localeCompare(b.sessionName);
                default:
                    return 0;
            }
        });

        return filtered;
    }, [sessions, searchQuery, filters, sortBy, selectedFolder, selectedTags]);

    // Compute available tags from all sessions
    const availableTags = useMemo(() => {
        return extractTagsFromSessions(sessions);
    }, [sessions]);

    // Compute session counts per folder
    const sessionCounts = useMemo(() => {
        const counts = {};
        sessions.forEach(session => {
            const folderId = session.folderId || 'all';
            counts[folderId] = (counts[folderId] || 0) + 1;
        });
        return counts;
    }, [sessions]);

    // Compute favorite count
    const favoriteCount = useMemo(() => {
        return sessions.filter(s => s.isFavorite === true).length;
    }, [sessions]);

    return (
        <div className="flex h-screen bg-slate-900 text-slate-100 font-sans">
            {/* Folder Sidebar */}
            <FolderSidebar
                folders={folders}
                selectedFolder={selectedFolder}
                onSelectFolder={setSelectedFolder}
                onCreateFolder={() => {
                    setEditingFolder(null);
                    setFolderDialogOpen(true);
                }}
                onEditFolder={handleEditFolder}
                onDeleteFolder={handleDeleteFolder}
                sessionCounts={sessionCounts}
                favoriteCount={favoriteCount}
                isCollapsed={isSidebarCollapsed}
                onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="p-6 overflow-y-auto h-full">
                    <header className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight mb-1">Mis Sesiones</h1>
                            <p className="text-slate-400">Gestiona tus grabaciones y notas</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <ThemeSelector />
                            <Link
                                to="/new"
                                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-900/20"
                            >
                                <Plus className="w-5 h-5" /> Nueva Sesión
                            </Link>
                        </div>
                    </header>

                    {/* Toolbar */}
                    <div className="flex flex-wrap items-center gap-3 mb-6 bg-slate-800 border border-slate-700 rounded-xl p-4">
                        {/* Select All Checkbox */}
                        {sessions.length > 0 && (
                            <label className="flex items-center gap-2 cursor-pointer mr-2">
                                <input
                                    type="checkbox"
                                    checked={selectedSessions.length === filteredAndSortedSessions.length && filteredAndSortedSessions.length > 0}
                                    onChange={(e) => handleSelectAll(e.target.checked)}
                                    className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900"
                                />
                                <span className="text-sm text-slate-400">Todo</span>
                            </label>
                        )}

                        <SearchBar
                            value={searchQuery}
                            onChange={setSearchQuery}
                        />

                        <div className="flex items-center gap-2 ml-auto">
                            <ViewToggle view={view} onViewChange={setView} />
                            <TagFilter
                                availableTags={availableTags}
                                selectedTags={selectedTags}
                                onTagsChange={setSelectedTags}
                            />
                            <SessionFilters filters={filters} onFiltersChange={setFilters} />

                            {/* Sort dropdown */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500"
                            >
                                <option value="newest">Más reciente</option>
                                <option value="oldest">Más antiguo</option>
                                <option value="mostViewed">Más visto</option>
                                <option value="topRated">Mejor calificado</option>
                                <option value="alphabetical">Alfabético</option>
                            </select>
                        </div>
                    </div>

                    {/* Results count */}
                    {(searchQuery || selectedTags.length > 0 || Object.values(filters).some(v => v !== 'all' && v !== 0 && v !== false)) && (
                        <div className="mb-4 text-sm text-slate-400">
                            {filteredAndSortedSessions.length} sesión{filteredAndSortedSessions.length !== 1 ? 'es' : ''} encontrada{filteredAndSortedSessions.length !== 1 ? 's' : ''}
                        </div>
                    )}

                    {/* Session List */}
                    {filteredAndSortedSessions.length === 0 ? (
                        <div className="text-center py-20 bg-slate-800 rounded-2xl border border-slate-700">
                            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Play className="w-8 h-8 text-slate-500 ml-1" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">No se encontraron sesiones</h3>
                            <p className="text-slate-400 mb-6">Intenta ajustar tus filtros o crea una nueva sesión.</p>
                            <Link
                                to="/new"
                                className="text-indigo-400 hover:text-indigo-300 font-medium"
                            >
                                Crear una nueva sesión &rarr;
                            </Link>
                        </div>
                    ) : (
                        <div className={view === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-3"}>
                            {filteredAndSortedSessions.map(session => (
                                <div
                                    key={session.id}
                                    className={`group relative bg-slate-800 hover:bg-slate-750 border rounded-xl p-4 transition-all hover:shadow-lg ${selectedSessions.includes(session.id)
                                        ? 'border-indigo-500 bg-indigo-500/5'
                                        : 'border-slate-700 hover:border-indigo-500/50'
                                        }`}
                                >
                                    {/* Selection Checkbox (Absolute) */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <input
                                            type="checkbox"
                                            checked={selectedSessions.includes(session.id)}
                                            onChange={(e) => handleSelectSession(session.id, e.target.checked)}
                                            className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900"
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                    </div>

                                    {/* Main Link Area */}
                                    <Link to={`/session/${session.id}`} className="block pl-8">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-start gap-4 flex-1">
                                                {/* Icon */}
                                                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors flex-shrink-0">
                                                    <Play className="w-6 h-6 ml-1" />
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="font-semibold text-lg text-white truncate">
                                                            {session.sessionName}
                                                        </h3>
                                                        {/* Favorite Star */}
                                                        <button
                                                            onClick={(e) => handleToggleFavorite(e, session)}
                                                            className={`p-1 rounded-full hover:bg-slate-700 transition-colors ${session.isFavorite ? 'text-yellow-400' : 'text-slate-600 hover:text-yellow-400'
                                                                }`}
                                                        >
                                                            <Star className="w-4 h-4" fill={session.isFavorite ? "currentColor" : "none"} />
                                                        </button>
                                                    </div>

                                                    {/* Metadata Row */}
                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-2">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="w-3.5 h-3.5" />
                                                            {session.createdAt?.toDate
                                                                ? session.createdAt.toDate().toLocaleDateString()
                                                                : new Date(session.createdAt).toLocaleDateString()}
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="w-3.5 h-3.5" />
                                                            {formatDuration(session.durationMs)}
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Eye className="w-3.5 h-3.5" />
                                                            {session.viewCount || 0}
                                                        </div>
                                                        {session.ratingAverage > 0 && (
                                                            <div className="flex items-center gap-1 text-yellow-500">
                                                                <RatingStars rating={session.ratingAverage} size={14} readOnly />
                                                                <span className="text-slate-400">({session.ratingCount})</span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Tags Row */}
                                                    {session.tags && session.tags.length > 0 && (
                                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                                            {session.tags.map(tag => (
                                                                <span key={tag} className="px-2 py-0.5 bg-slate-700 text-slate-300 rounded text-xs border border-slate-600">
                                                                    #{tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex items-center gap-1" onClick={(e) => e.preventDefault()}>
                                                <button
                                                    onClick={async (e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        try {
                                                            const { getSessionComments } = await import('./firebase');
                                                            const comments = await getSessionComments(session.id);
                                                            const { exportSessionToJson } = await import('./utils/exportUtils');
                                                            const success = exportSessionToJson(session, comments);
                                                            if (success) {
                                                                setAlertDialog({
                                                                    isOpen: true,
                                                                    type: 'success',
                                                                    title: 'Exportación exitosa',
                                                                    message: 'La sesión se ha descargado correctamente.'
                                                                });
                                                            }
                                                        } catch (error) {
                                                            console.error("Export error:", error);
                                                            setAlertDialog({
                                                                isOpen: true,
                                                                type: 'error',
                                                                title: 'Error de exportación',
                                                                message: 'No se pudo exportar la sesión.'
                                                            });
                                                        }
                                                    }}
                                                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                                                    title="Exportar a JSON"
                                                >
                                                    <Download className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        e.preventDefault();
                                                        setEditingId(session.id);
                                                        setEditingName(session.sessionName);
                                                        setEditingTags(session.tags || []);
                                                    }}
                                                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                                                    title="Editar"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={(e) => copyShareLink(e, session.id)}
                                                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                                                    title="Copiar enlace"
                                                >
                                                    <Share2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={(e) => handleDeleteSession(e, session)}
                                                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                                    title="Eliminar"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Floating Components */}
            <BulkActionsToolbar
                selectedCount={selectedSessions.length}
                onClearSelection={() => setSelectedSessions([])}
                onMoveToFolder={handleBulkMoveToFolder}
                onAddTags={handleBulkAddTags}
                onDelete={handleBulkDelete}
                folders={folders}
            />

            <FolderDialog
                isOpen={folderDialogOpen}
                onClose={() => setFolderDialogOpen(false)}
                onSave={editingFolder ? handleSaveFolder : handleCreateFolder}
                initialData={editingFolder}
            />

            {/* Bulk Tag Dialog */}
            {tagDialogOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-slate-800 rounded-xl shadow-2xl max-w-md w-full border border-slate-700 p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Agregar etiquetas</h3>
                        <div className="mb-6">
                            <TagInput
                                tags={bulkTags}
                                onChange={setBulkTags}
                                suggestions={availableTags}
                                placeholder="Escribe y presiona Enter..."
                            />
                        </div>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setTagDialogOpen(false)}
                                className="px-4 py-2 text-slate-300 hover:text-white"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleSaveBulkTags}
                                disabled={isSavingTags || bulkTags.length === 0}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${isSavingTags || bulkTags.length === 0
                                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                    }`}
                            >
                                {isSavingTags ? 'Guardando...' : 'Guardar'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <AlertDialog
                isOpen={alertDialog.isOpen}
                onClose={() => setAlertDialog({ ...alertDialog, isOpen: false })}
                type={alertDialog.type}
                title={alertDialog.title}
                message={alertDialog.message}
            />
            <ConfirmDialog
                isOpen={confirmDialog.isOpen}
                onClose={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
                onConfirm={confirmDialog.onConfirm}
                onCancel={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
                title={confirmDialog.title}
                message={confirmDialog.message}
                variant={confirmDialog.variant}
            />
        </div>
    );
};

export default Dashboard;
