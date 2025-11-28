import React, { useState } from 'react';
import { Edit2, Trash2, Check, X } from 'lucide-react';
import { getUserInitials, formatTimestamp, getRelativeTime } from '../utils/userUtils';

const CommentItem = ({ comment, currentUserId, isActive, onSeek, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(comment.text);
    const isOwnComment = comment.userId === currentUserId;

    const handleSave = () => {
        if (editText.trim() && editText !== comment.text) {
            onEdit(comment.id, editText.trim());
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditText(comment.text);
        setIsEditing(false);
    };

    const handleDelete = () => {
        if (window.confirm('¿Eliminar este comentario?')) {
            onDelete(comment.id);
        }
    };

    // Convert Firestore Timestamp to Date if needed
    const createdDate = comment.createdAt?.toDate ? comment.createdAt.toDate() : new Date(comment.createdAt);

    return (
        <div
            className={`p-4 rounded-lg transition-all cursor-pointer hover:bg-slate-700/50 ${isActive ? 'bg-indigo-500/20 border-l-4 border-indigo-500' : 'bg-slate-700/30 border-l-4 border-transparent'
                }`}
            onClick={() => !isEditing && onSeek(comment.timestamp)}
        >
            <div className="flex items-start gap-3">
                {/* User Avatar */}
                <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: comment.userColor }}
                >
                    {getUserInitials(comment.userName)}
                </div>

                <div className="flex-1 min-w-0">
                    {/* Header with user name, timestamp, and actions */}
                    <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="font-semibold text-slate-200">{comment.userName}</span>
                            <span className="text-slate-500">•</span>
                            <span className="text-indigo-400 font-mono text-xs">
                                {formatTimestamp(comment.timestamp)}
                            </span>
                        </div>

                        {/* Action buttons - only show for own comments */}
                        {isOwnComment && !isEditing && (
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsEditing(true);
                                    }}
                                    className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-600 rounded transition-colors"
                                    title="Editar"
                                >
                                    <Edit2 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete();
                                    }}
                                    className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors"
                                    title="Eliminar"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Comment text or edit input */}
                    {isEditing ? (
                        <div className="mt-2" onClick={(e) => e.stopPropagation()}>
                            <textarea
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                maxLength={500}
                                className="w-full bg-slate-800 border border-indigo-500 rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                                rows={3}
                                autoFocus
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && e.ctrlKey) {
                                        handleSave();
                                    }
                                    if (e.key === 'Escape') {
                                        handleCancel();
                                    }
                                }}
                            />
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-xs text-slate-500">
                                    {editText.length}/500
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleCancel}
                                        className="px-3 py-1.5 text-sm bg-slate-600 hover:bg-slate-500 rounded text-white transition-colors flex items-center gap-1"
                                    >
                                        <X className="w-3.5 h-3.5" />
                                        Cancelar
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        disabled={!editText.trim()}
                                        className="px-3 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-700 rounded text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                                    >
                                        <Check className="w-3.5 h-3.5" />
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <p className="text-slate-300 text-sm leading-relaxed mt-1">{comment.text}</p>
                            <p className="text-xs text-slate-500 mt-1">{getRelativeTime(createdDate)}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommentItem;
