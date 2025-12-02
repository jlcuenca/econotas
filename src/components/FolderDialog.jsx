import React, { useState } from 'react';
import { X, Folder, Check } from 'lucide-react';

const PRESET_COLORS = [
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Green', value: '#10b981' },
    { name: 'Yellow', value: '#f59e0b' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Purple', value: '#a855f7' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Teal', value: '#14b8a6' },
];

const FolderDialog = ({ isOpen, onClose, onSave, initialData = null }) => {
    const [name, setName] = useState(initialData?.name || '');
    const [color, setColor] = useState(initialData?.color || PRESET_COLORS[0].value);
    const [error, setError] = useState('');

    const handleSave = () => {
        if (!name.trim()) {
            setError('El nombre de la carpeta es requerido');
            return;
        }

        onSave({ name: name.trim(), color });
        handleClose();
    };

    const handleClose = () => {
        setName('');
        setColor(PRESET_COLORS[0].value);
        setError('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-xl shadow-2xl max-w-md w-full border border-slate-700">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: color }}>
                            <Folder className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-white">
                            {initialData ? 'Editar Carpeta' : 'Nueva Carpeta'}
                        </h2>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Name Input */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Nombre de la carpeta
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setError('');
                            }}
                            placeholder="Ej: Matemáticas, Física..."
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            autoFocus
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSave();
                                if (e.key === 'Escape') handleClose();
                            }}
                        />
                        {error && (
                            <p className="mt-2 text-sm text-red-400">{error}</p>
                        )}
                    </div>

                    {/* Color Picker */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-3">
                            Color
                        </label>
                        <div className="grid grid-cols-4 gap-3">
                            {PRESET_COLORS.map((preset) => (
                                <button
                                    key={preset.value}
                                    onClick={() => setColor(preset.value)}
                                    className="relative h-12 rounded-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
                                    style={{ backgroundColor: preset.value }}
                                    title={preset.name}
                                >
                                    {color === preset.value && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Check className="w-6 h-6 text-white drop-shadow-lg" />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-700">
                    <button
                        onClick={handleClose}
                        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                    >
                        {initialData ? 'Guardar Cambios' : 'Crear Carpeta'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FolderDialog;
