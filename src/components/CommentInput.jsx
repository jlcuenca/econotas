import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { formatTimestamp, getUserInitials } from '../utils/userUtils';

const CommentInput = ({ currentTime, onSubmit, userName, userColor, disabled = false }) => {
    const [text, setText] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSubmit = () => {
        if (text.trim()) {
            onSubmit(text.trim());
            setText('');
            setIsExpanded(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleSubmit();
        }
        if (e.key === 'Escape') {
            setText('');
            setIsExpanded(false);
        }
    };

    if (disabled) {
        return null;
    }

    return (
        <div className="p-4 border-t border-slate-700 bg-slate-800/50">
            <div className="flex items-start gap-3">
                {/* User Avatar */}
                <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: userColor }}
                >
                    {getUserInitials(userName)}
                </div>

                <div className="flex-1">
                    {/* Timestamp indicator */}
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-slate-400">Comentar en</span>
                        <span className="text-sm text-indigo-400 font-mono font-semibold">
                            {formatTimestamp(currentTime)}
                        </span>
                    </div>

                    {/* Text input */}
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onFocus={() => setIsExpanded(true)}
                        onKeyDown={handleKeyDown}
                        maxLength={500}
                        placeholder="Agrega un comentario..."
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none transition-all"
                        rows={isExpanded ? 3 : 1}
                    />

                    {/* Actions - only show when expanded */}
                    {isExpanded && (
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-slate-500">
                                {text.length}/500 • Ctrl+Enter para publicar
                            </span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        setText('');
                                        setIsExpanded(false);
                                    }}
                                    className="px-3 py-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    disabled={!text.trim()}
                                    className="px-4 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 font-medium"
                                >
                                    <Plus className="w-4 h-4" />
                                    Comentar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommentInput;
