import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeSelector = () => {
    const { currentTheme, setTheme, themes } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                title="Cambiar tema"
            >
                <Palette className="w-5 h-5" />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50 p-2 animate-in fade-in zoom-in-95 duration-200">
                        <div className="text-xs font-semibold text-slate-400 px-2 py-1 mb-1">
                            TEMAS
                        </div>
                        {Object.entries(themes).map(([key, theme]) => (
                            <button
                                key={key}
                                onClick={() => {
                                    setTheme(key);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${currentTheme === key
                                        ? 'bg-indigo-500/10 text-indigo-400'
                                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: theme.colors['--color-accent-primary'] }}
                                    />
                                    {theme.name}
                                </div>
                                {currentTheme === key && <Check className="w-3 h-3" />}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ThemeSelector;
