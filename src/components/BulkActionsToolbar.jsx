import React from 'react';
import { X, Folder, Tag, Trash2 } from 'lucide-react';

const BulkActionsToolbar = ({
    selectedCount,
    onClearSelection,
    onMoveToFolder,
    onAddTags,
    onDelete,
    folders = []
}) => {
    if (selectedCount === 0) return null;

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30">
            <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl px-6 py-4 flex items-center gap-4">
                {/* Selection Count */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600 rounded-lg">
                    <span className="text-white font-bold">{selectedCount}</span>
                    <span className="text-indigo-200 text-sm">seleccionado{selectedCount !== 1 ? 's' : ''}</span>
                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-slate-700"></div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* Move to Folder */}
                    <div className="relative group">
                        <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors">
                            <Folder className="w-4 h-4" />
                            Mover a
                        </button>

                        {/* Dropdown */}
                        <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block">
                            <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 min-w-[200px] max-h-64 overflow-y-auto">
                                <button
                                    onClick={() => onMoveToFolder(null)}
                                    className="w-full flex items-center gap-2 px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors text-left"
                                >
                                    <Folder className="w-4 h-4" />
                                    Todas las sesiones
                                </button>
                                {folders.length > 0 && (
                                    <div className="h-px bg-slate-700 my-1"></div>
                                )}
                                {folders.map(folder => (
                                    <button
                                        key={folder.id}
                                        onClick={() => onMoveToFolder(folder.id)}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors text-left"
                                    >
                                        <div
                                            className="w-4 h-4 rounded"
                                            style={{ backgroundColor: folder.color }}
                                        />
                                        {folder.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Add Tags */}
                    <button
                        onClick={onAddTags}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                    >
                        <Tag className="w-4 h-4" />
                        Etiquetar
                    </button>

                    {/* Delete */}
                    <button
                        onClick={onDelete}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                    >
                        <Trash2 className="w-4 h-4" />
                        Eliminar
                    </button>
                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-slate-700"></div>

                {/* Clear Selection */}
                <button
                    onClick={onClearSelection}
                    className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white"
                    title="Cancelar selección"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default BulkActionsToolbar;
