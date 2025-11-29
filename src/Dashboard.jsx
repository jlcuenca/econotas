import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Play, Share2, Clock, Calendar, Trash2, Edit2, Check, X, Eye } from 'lucide-react';
import { signInUser, getUserSessions, auth, deleteSession, updateSession } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import AlertDialog from './components/AlertDialog';
import ConfirmDialog from './components/ConfirmDialog';
import RatingStars from './components/RatingStars';

const Dashboard = () => {
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [editingName, setEditingName] = useState('');

    // Dialog states
    const [alertDialog, setAlertDialog] = useState({ isOpen: false, type: 'info', title: '', message: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', message: '', onConfirm: null });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                loadSessions(currentUser.uid);
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
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-6">
            <div className="max-w-4xl mx-auto">
                <header className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-1">Mis Sesiones</h1>
                        <p className="text-slate-400">Gestiona tus grabaciones y notas</p>
                    </div>
                    <Link
                        to="/new"
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-900/20"
                    >
                        <Plus className="w-5 h-5" /> Nueva Sesión
                    </Link>
                </header>

                {sessions.length === 0 ? (
                    <div className="text-center py-20 bg-slate-800 rounded-2xl border border-slate-700">
                        <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Play className="w-8 h-8 text-slate-500 ml-1" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">No hay sesiones guardadas</h3>
                        <p className="text-slate-400 mb-6">Comienza a grabar tu primera sesión de tutoría.</p>
                        <Link
                            to="/new"
                            className="text-indigo-400 hover:text-indigo-300 font-medium"
                        >
                            Crear una nueva sesión &rarr;
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {sessions.map(session => (
                            <Link
                                key={session.id}
                                to={`/session/${session.id}`}
                                className="block bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-xl p-4 transition-all hover:border-indigo-500/50 hover:shadow-lg group"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                            <Play className="w-6 h-6 ml-1" />
                                        </div>
                                        <div className="flex-1">
                                            {editingId === session.id ? (
                                                <div className="flex items-center gap-2" onClick={(e) => e.preventDefault()}>
                                                    <input
                                                        type="text"
                                                        value={editingName}
                                                        onChange={(e) => setEditingName(e.target.value)}
                                                        className="flex-1 bg-slate-700 border border-indigo-500 rounded px-3 py-1 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                        autoFocus
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter') saveEdit(e, session.id);
                                                            if (e.key === 'Escape') cancelEdit(e);
                                                        }}
                                                    />
                                                    <button
                                                        onClick={(e) => saveEdit(e, session.id)}
                                                        className="p-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors"
                                                        title="Guardar"
                                                    >
                                                        <Check className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={cancelEdit}
                                                        className="p-2 bg-slate-600 hover:bg-slate-500 rounded-lg text-white transition-colors"
                                                        title="Cancelar"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ) : (
                                                <>
                                                    <h3 className="font-semibold text-lg group-hover:text-indigo-300 transition-colors">
                                                        {session.sessionName || "Sesión sin nombre"}
                                                    </h3>
                                                    <div className="flex items-center gap-4 text-sm text-slate-400 mt-1">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" />
                                                            {formatDate(session.createdAt)}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {formatDuration(session.durationMs)}
                                                        </span>
                                                        <span className="flex items-center gap-1" title={`${session.viewCount || 0} reproducciones`}>
                                                            <Eye className="w-3 h-3" />
                                                            {session.viewCount || 0}
                                                        </span>
                                                        {session.ratingAverage > 0 && (
                                                            <span className="flex items-center gap-1" title={`Calificación: ${session.ratingAverage.toFixed(1)} (${session.ratingCount} votos)`}>
                                                                <RatingStars rating={session.ratingAverage} size={12} />
                                                                <span className="text-xs">({session.ratingCount})</span>
                                                            </span>
                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <button
                                            onClick={(e) => startEditing(e, session)}
                                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                                            title="Editar nombre"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={(e) => copyShareLink(e, session.id)}
                                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                                            title="Copiar enlace"
                                        >
                                            <Share2 className="w-5 h-5" />
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
                        ))}
                    </div>
                )}
            </div>

            {/* Dialogs */}
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
