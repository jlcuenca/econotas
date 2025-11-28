import React, { useEffect, useRef } from 'react';
import { X, MessageSquare } from 'lucide-react';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';

const CommentPanel = ({
    isOpen,
    onClose,
    sessionId,
    comments,
    currentTime,
    onSeekToTime,
    userId,
    userName,
    userColor,
    canEdit = true,
    onAddComment,
    onEditComment,
    onDeleteComment
}) => {
    const panelRef = useRef(null);
    const activeCommentRef = useRef(null);

    // Find active comment based on current time (within 2 second window)
    const activeComment = comments.find(
        c => Math.abs(c.timestamp - currentTime) < 2000
    );

    // Auto-scroll to active comment when it changes
    useEffect(() => {
        if (activeComment && activeCommentRef.current && isOpen) {
            activeCommentRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, [activeComment?.id, isOpen]);

    // Prevent body scroll when panel is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                onClick={onClose}
            />

            {/* Panel */}
            <div
                ref={panelRef}
                className="fixed top-0 right-0 h-full w-full sm:w-96 bg-slate-800 shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-out"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-900">
                    <div className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-indigo-400" />
                        <h2 className="text-lg font-bold text-white">
                            Comentarios
                        </h2>
                        <span className="px-2 py-0.5 text-xs bg-indigo-500/20 text-indigo-300 rounded-full font-semibold">
                            {comments.length}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Comments List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {comments.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12">
                            <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-4">
                                <MessageSquare className="w-8 h-8 text-slate-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-300 mb-2">
                                Sin comentarios
                            </h3>
                            <p className="text-sm text-slate-500 max-w-xs">
                                {canEdit
                                    ? 'Agrega el primer comentario a esta sesión'
                                    : 'Aún no hay comentarios en esta sesión'}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-3 group">
                            {comments.map((comment) => (
                                <div
                                    key={comment.id}
                                    ref={
                                        activeComment?.id === comment.id
                                            ? activeCommentRef
                                            : null
                                    }
                                >
                                    <CommentItem
                                        comment={comment}
                                        currentUserId={userId}
                                        isActive={activeComment?.id === comment.id}
                                        onSeek={onSeekToTime}
                                        onEdit={onEditComment}
                                        onDelete={onDeleteComment}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Input Area */}
                {canEdit && (
                    <CommentInput
                        currentTime={currentTime}
                        onSubmit={onAddComment}
                        userName={userName}
                        userColor={userColor}
                    />
                )}
            </div>
        </>
    );
};

export default CommentPanel;
