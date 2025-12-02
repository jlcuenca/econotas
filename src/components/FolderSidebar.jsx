import React, { useState } from 'react';
import { Folder, Star, Plus, MoreVertical, Edit2, Trash2, ChevronLeft, ChevronRight, Inbox } from 'lucide-react';

const FolderSidebar = ({
    folders = [],
    selectedFolder,
    onSelectFolder,
    onCreateFolder,
    onEditFolder,
    onDeleteFolder,
    sessionCounts = {},
    favoriteCount = 0,
    isCollapsed = false,
    onToggleCollapse
}) => {
    const [contextMenu, setContextMenu] = useState(null);

    const handleContextMenu = (e, folder) => {
        e.preventDefault();
        e.stopPropagation();
        setContextMenu({ folder, x: e.clientX, y: e.clientY });
    };

    const closeContextMenu = () => setContextMenu(null);

    const FolderItem = ({ folder, count, icon: Icon, color, isSpecial = false }) => {
        const isSelected = selectedFolder === folder?.id || selectedFolder === folder;

        return (
            <button
                onClick={() => {
                    onSelectFolder(folder?.id || folder);
                    closeContextMenu();
                }}
                onContextMenu={(e) => !isSpecial && handleContextMenu(e, folder)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
            >
                <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-white/20' : 'bg-slate-700'
                        }`}
                    style={color && !isSelected ? { backgroundColor: color + '20' } : {}}
                >
                    <Icon
                        className="w-4 h-4"
                        style={color && !isSelected ? { color } : {}}
                    />
                </div>

                {!isCollapsed && (
                    <>
                        <span className="flex-1 text-left font-medium truncate">
                            {folder?.name || folder}
                        </span>
                        <span className={`text-sm px-2 py-0.5 rounded-full ${isSelected
                                ? 'bg-white/20 text-white'
                                : 'bg-slate-700 text-slate-400'
                            }`}>
                            {count}
                        </span>
                        {!isSpecial && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleContextMenu(e, folder);
                                }}
                                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-slate-600 rounded transition-opacity"
                            >
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        )}
                    </>
                )}
            </button>
        );
    };

    return (
        <>
            <div className={`bg-slate-800 border-r border-slate-700 flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'
                }`}>
                {/* Header */}
                <div className="p-4 border-b border-slate-700 flex items-center justify-between">
                    {!isCollapsed && (
                        <h2 className="text-lg font-bold text-white">Carpetas</h2>
                    )}
                    <button
                        onClick={onToggleCollapse}
                        className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white"
                        title={isCollapsed ? 'Expandir' : 'Colapsar'}
                    >
                        {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                    </button>
                </div>

                {/* Folder List */}
                <div className="flex-1 overflow-y-auto p-3 space-y-1">
                    {/* All Sessions */}
                    <FolderItem
                        folder="all"
                        count={Object.values(sessionCounts).reduce((a, b) => a + b, 0)}
                        icon={Inbox}
                        isSpecial
                    />

                    {/* Favorites */}
                    <FolderItem
                        folder="favorites"
                        count={favoriteCount}
                        icon={Star}
                        color="#f59e0b"
                        isSpecial
                    />

                    {/* Divider */}
                    {folders.length > 0 && !isCollapsed && (
                        <div className="h-px bg-slate-700 my-2"></div>
                    )}

                    {/* User Folders */}
                    {folders.map(folder => (
                        <FolderItem
                            key={folder.id}
                            folder={folder}
                            count={sessionCounts[folder.id] || 0}
                            icon={Folder}
                            color={folder.color}
                        />
                    ))}
                </div>

                {/* Create Folder Button */}
                {!isCollapsed && (
                    <div className="p-3 border-t border-slate-700">
                        <button
                            onClick={onCreateFolder}
                            className="w-full flex items-center gap-2 px-3 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Nueva Carpeta
                        </button>
                    </div>
                )}
            </div>

            {/* Context Menu */}
            {contextMenu && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={closeContextMenu}
                    />
                    <div
                        className="fixed bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 z-50 min-w-[160px]"
                        style={{
                            left: `${contextMenu.x}px`,
                            top: `${contextMenu.y}px`
                        }}
                    >
                        <button
                            onClick={() => {
                                onEditFolder(contextMenu.folder);
                                closeContextMenu();
                            }}
                            className="w-full flex items-center gap-2 px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                        >
                            <Edit2 className="w-4 h-4" />
                            Editar
                        </button>
                        <button
                            onClick={() => {
                                onDeleteFolder(contextMenu.folder);
                                closeContextMenu();
                            }}
                            className="w-full flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                            Eliminar
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default FolderSidebar;
