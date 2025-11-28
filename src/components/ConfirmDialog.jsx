import React, { useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import Button from './Button';

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
                className="bg-[var(--bg-card)] rounded-2xl shadow-2xl max-w-md w-full border border-[var(--border)] overflow-hidden animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header with icon */}
                <div className={`flex items-center gap-3 p-6 border-b ${isDestructive ? 'border-red-500/30' : 'border-[var(--border)]'}`}>
                    {isDestructive && (
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                            <AlertTriangle className="w-6 h-6 text-red-400" />
                        </div>
                    )}
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-[var(--text)]">{title}</h3>
                    </div>
                    <Button
                        onClick={handleCancel}
                        variant="ghost"
                        className="p-1 rounded-lg"
                        label="Cerrar"
                    >
                        <X className="w-5 h-5" />
                    </Button>
                </div>

                {/* Message content */}
                <div className="p-6">
                    <p className="text-[var(--text)] opacity-80 leading-relaxed">{message}</p>
                </div>

                {/* Actions */}
                <div className="p-6 pt-0 flex justify-end gap-3">
                    <Button
                        onClick={handleCancel}
                        variant="secondary"
                        className="px-6 py-2 rounded-lg font-semibold"
                    >
                        {cancelText}
                    </Button>
                    <Button
                        onClick={handleConfirm}
                        variant={isDestructive ? 'danger' : 'primary'}
                        className="px-6 py-2 rounded-lg font-semibold shadow-lg"
                        autoFocus
                    >
                        {confirmText}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;
