import React, { useEffect } from 'react';
import { X, AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';

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
            buttonBg: 'bg-blue-600 hover:bg-blue-700'
        },
        success: {
            icon: CheckCircle,
            bgColor: 'bg-green-500',
            textColor: 'text-green-400',
            borderColor: 'border-green-500/30',
            buttonBg: 'bg-green-600 hover:bg-green-700'
        },
        warning: {
            icon: AlertTriangle,
            bgColor: 'bg-yellow-500',
            textColor: 'text-yellow-400',
            borderColor: 'border-yellow-500/30',
            buttonBg: 'bg-yellow-600 hover:bg-yellow-700'
        },
        error: {
            icon: AlertCircle,
            bgColor: 'bg-red-500',
            textColor: 'text-red-400',
            borderColor: 'border-red-500/30',
            buttonBg: 'bg-red-600 hover:bg-red-700'
        }
    };

    const { icon: Icon, bgColor, textColor, borderColor, buttonBg } = config[type];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
        >
            <div
                className="bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full border border-slate-700 overflow-hidden animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header with icon */}
                <div className={`flex items-center gap-3 p-6 border-b ${borderColor}`}>
                    <div className={`w-12 h-12 rounded-full ${bgColor}/10 flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${textColor}`} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">{title}</h3>
                    </div>
                    <button
                        onClick={onClose}
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
                <div className="p-6 pt-0 flex justify-end">
                    <button
                        onClick={onClose}
                        className={`px-6 py-2 ${buttonBg} text-white rounded-lg font-semibold transition-all shadow-lg active:scale-95`}
                        autoFocus
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AlertDialog;
