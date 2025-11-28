import React, { useEffect } from 'react';
import { X, AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import Button from './Button';

const AlertDialog = ({
    isOpen,
    onClose,
    type = 'info',
    title,
    message,
    confirmText = 'OK'
}) => {
    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

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

    // Icon and color configuration based on type
    const config = {
        info: {
            icon: Info,
            bgColor: 'bg-blue-500',
            textColor: 'text-blue-400',
            borderColor: 'border-blue-500/30',
            buttonVariant: 'info'
        },
        success: {
            icon: CheckCircle,
            bgColor: 'bg-green-500',
            textColor: 'text-green-400',
            borderColor: 'border-green-500/30',
            buttonVariant: 'success'
        },
        warning: {
            icon: AlertTriangle,
            bgColor: 'bg-yellow-500',
            textColor: 'text-yellow-400',
            borderColor: 'border-yellow-500/30',
            buttonVariant: 'warning'
        },
        error: {
            icon: AlertCircle,
            bgColor: 'bg-red-500',
            textColor: 'text-red-400',
            borderColor: 'border-red-500/30',
            buttonVariant: 'danger'
        }
    };

    const { icon: Icon, bgColor, textColor, borderColor, buttonVariant } = config[type];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
        >
            <div
                className="bg-[var(--bg-card)] rounded-2xl shadow-2xl max-w-md w-full border border-[var(--border)] overflow-hidden animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header with icon */}
                <div className={`flex items-center gap-3 p-6 border-b ${borderColor}`}>
                    <div className={`w-12 h-12 rounded-full ${bgColor}/10 flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${textColor}`} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-[var(--text)]">{title}</h3>
                    </div>
                    <Button
                        onClick={onClose}
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
                <div className="p-6 pt-0 flex justify-end">
                    <Button
                        onClick={onClose}
                        variant={buttonVariant}
                        className="px-6 py-2 rounded-lg font-semibold shadow-lg"
                    >
                        {confirmText}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AlertDialog;
