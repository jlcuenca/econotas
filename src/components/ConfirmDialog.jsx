import React, { useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';

const ConfirmDialog = ({
    isOpen,
    onConfirm,
    onCancel,
    onClose,
    title,
    message,
    confirmText = 'Confirmar',
    cancelText = 'Cancelar',
    variant = 'default' // 'default' or 'destructive'
}) => {
    const handleCancel = () => {
        if (onCancel) onCancel();
        if (onClose) onClose();
    };

    const handleConfirm = () => {
        if (onConfirm) onConfirm();
        if (onClose) onClose();
    };

    // Handle ESC key to cancel
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) {
                handleCancel();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen]);

    // Prevent body scroll when dialog is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const isDestructive = variant === 'destructive';

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={handleCancel}
        >
            <div
                className="bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full border border-slate-700 overflow-hidden animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header with icon */}
                <div className={`flex items-center gap-3 p-6 border-b ${isDestructive ? 'border-red-500/30' : 'border-slate-700'}`}>
                    {isDestructive && (
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                            <AlertTriangle className="w-6 h-6 text-red-400" />
                        </div>
                    )}
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">{title}</h3>
                    </div>
                    <button
                        onClick={handleCancel}
                        className="p-1 rounded-lg hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Message content */}
                <div className="p-6">
                    <p className="text-slate-300 leading-relaxed">{message}</p>
                </div>

                {/* Actions */}
                <div className="p-6 pt-0 flex justify-end gap-3">
                    <button
                        onClick={handleCancel}
                        className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all active:scale-95"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={handleConfirm}
                        className={`px-6 py-2 ${isDestructive
                                ? 'bg-red-600 hover:bg-red-700'
                                : 'bg-indigo-600 hover:bg-indigo-700'
                            } text-white rounded-lg font-semibold transition-all shadow-lg active:scale-95`}
                        autoFocus
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;
