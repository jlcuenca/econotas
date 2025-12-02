import React, { useState } from 'react';
import { Palette, Check, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeSelector = () => {
    const { mode, currentTheme, activeTheme, setTheme, toggleMode, themes } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    // Filter themes based on mode
    const availableThemes = Object.entries(themes).filter(([key]) => {
        if (mode === 'light') {
            return key === 'light';
        }
        return key !== 'light'; // Show all dark themes
    });

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                title="Cambiar tema"
            >
                {mode === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50 p-2 animate-in fade-in zoom-in-95 duration-200">
                        {/* Mode Toggle */}
                        <div className="px-2 py-2 mb-2 border-b border-slate-700">
                            <div className="text-xs font-semibold text-slate-400 mb-2">
                                MODO
                            </div>
                            <div className="flex gap-1 bg-slate-900 rounded-lg p-1">
                                <button
                                    onClick={toggleMode}
                                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${mode === 'dark'
                                        ? 'bg-slate-700 text-white'
                                        : 'text-slate-400 hover:text-slate-300'
                                        }`}
                                >
                                    <Moon className="w-3.5 h-3.5" />
                                    Oscuro
                                </button>
                                <button
                                    onClick={toggleMode}
                                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${mode === 'light'
                                        ? 'bg-slate-700 text-white'
                                        : 'text-slate-400 hover:text-slate-300'
                                        }`}
                                >
                                    <Sun className="w-3.5 h-3.5" />
                                    Claro
                                </button>
                            </div>
                        </div>

                        {/* Theme Selection (only for dark mode) */}
                        {mode === 'dark' && (
                            <>
                                <div className="text-xs font-semibold text-slate-400 px-2 py-1 mb-1">
                                    PALETA
                                </div>
                                {availableThemes.map(([key, theme]) => (
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
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ThemeSelector;
