import React, { useState } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';

const SessionFilters = ({ filters, onFiltersChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFilterChange = (key, value) => {
        onFiltersChange({ ...filters, [key]: value });
    };

    const clearFilters = () => {
        onFiltersChange({
            dateRange: 'all',
            duration: 'all',
            minRating: 0,
            hasTranscription: false,
            hasComments: false
        });
    };

    const activeFiltersCount = Object.values(filters).filter(v =>
        v !== 'all' && v !== 0 && v !== false
    ).length;

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
            >
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filtros</span>
                {activeFiltersCount > 0 && (
                    <span className="px-1.5 py-0.5 bg-indigo-500 text-white text-xs font-bold rounded-full">
                        {activeFiltersCount}
                    </span>
                )}
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-72 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50 p-4 space-y-4">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-semibold text-white">Filtros</h3>
                            {activeFiltersCount > 0 && (
                                <button
                                    onClick={clearFilters}
                                    className="text-xs text-indigo-400 hover:text-indigo-300"
                                >
                                    Limpiar todo
                                </button>
                            )}
                        </div>

                        {/* Date Range */}
                        <div>
                            <label className="block text-xs font-medium text-slate-400 mb-2">
                                Fecha
                            </label>
                            <select
                                value={filters.dateRange}
                                onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500"
                            >
                                <option value="all">Todas</option>
                                <option value="today">Hoy</option>
                                <option value="week">Última semana</option>
                                <option value="month">Último mes</option>
                                <option value="year">Último año</option>
                            </select>
                        </div>

                        {/* Duration */}
                        <div>
                            <label className="block text-xs font-medium text-slate-400 mb-2">
                                Duración
                            </label>
                            <select
                                value={filters.duration}
                                onChange={(e) => handleFilterChange('duration', e.target.value)}
                                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500"
                            >
                                <option value="all">Todas</option>
                                <option value="short">Corta (&lt; 15 min)</option>
                                <option value="medium">Media (15-60 min)</option>
                                <option value="long">Larga (&gt; 60 min)</option>
                            </select>
                        </div>

                        {/* Min Rating */}
                        <div>
                            <label className="block text-xs font-medium text-slate-400 mb-2">
                                Calificación mínima
                            </label>
                            <select
                                value={filters.minRating}
                                onChange={(e) => handleFilterChange('minRating', Number(e.target.value))}
                                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500"
                            >
                                <option value="0">Cualquiera</option>
                                <option value="1">⭐ 1+</option>
                                <option value="2">⭐ 2+</option>
                                <option value="3">⭐ 3+</option>
                                <option value="4">⭐ 4+</option>
                                <option value="5">⭐ 5</option>
                            </select>
                        </div>

                        {/* Toggles */}
                        <div className="space-y-2 pt-2 border-t border-slate-700">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={filters.hasTranscription}
                                    onChange={(e) => handleFilterChange('hasTranscription', e.target.checked)}
                                    className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-slate-800"
                                />
                                <span className="text-sm text-slate-300">Con transcripción</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={filters.hasComments}
                                    onChange={(e) => handleFilterChange('hasComments', e.target.checked)}
                                    className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-slate-800"
                                />
                                <span className="text-sm text-slate-300">Con comentarios</span>
                            </label>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default SessionFilters;
