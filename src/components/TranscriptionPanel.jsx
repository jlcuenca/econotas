import React, { useState, useEffect, useRef } from 'react';
import { FileText, Search, Download, X, ChevronRight } from 'lucide-react';

const TranscriptionPanel = ({
    segments = [],
    currentTime = 0,
    onSeekToTime,
    onExport,
    isRecording = false
}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const activeSegmentRef = useRef(null);

    // Find active segment based on current playback time
    const activeSegmentIndex = segments.findIndex(segment =>
        currentTime >= segment.startTime && currentTime <= segment.endTime
    );

    // Scroll to active segment
    useEffect(() => {
        if (activeSegmentRef.current && activeSegmentIndex >= 0) {
            activeSegmentRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, [activeSegmentIndex]);

    // Handle search
    useEffect(() => {
        if (!searchQuery.trim()) {
            setSearchResults([]);
            return;
        }

        const query = searchQuery.toLowerCase();
        const results = segments
            .map((segment, index) => ({
                ...segment,
                index,
                matches: segment.text.toLowerCase().includes(query)
            }))
            .filter(s => s.matches);

        setSearchResults(results);
    }, [searchQuery, segments]);

    // Format time for display
    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Highlight search query in text
    const highlightText = (text, query) => {
        if (!query) return text;

        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, i) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <mark key={i} className="bg-yellow-400 text-slate-900 px-0.5 rounded">
                    {part}
                </mark>
            ) : part
        );
    };

    const displaySegments = searchQuery ? searchResults : segments;

    return (
        <div className="h-full flex flex-col bg-slate-800 border-l border-slate-700">
            {/* Header */}
            <div className="p-4 border-b border-slate-700">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-indigo-400" />
                        <h3 className="font-semibold text-white">Transcripción</h3>
                    </div>
                    {segments.length > 0 && (
                        <button
                            onClick={onExport}
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                            title="Exportar transcripción"
                        >
                            <Download className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* Search bar */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Buscar en transcripción..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-8 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-white"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* Search results count */}
                {searchQuery && (
                    <p className="text-xs text-slate-400 mt-2">
                        {searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''} encontrado{searchResults.length !== 1 ? 's' : ''}
                    </p>
                )}
            </div>

            {/* Segments list */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {displaySegments.length === 0 ? (
                    <div className="text-center py-12 text-slate-400">
                        {isRecording ? (
                            <div className="space-y-2">
                                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-500/20 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                </div>
                                <p className="text-sm">Escuchando...</p>
                                <p className="text-xs">Habla claramente para transcribir</p>
                            </div>
                        ) : searchQuery ? (
                            <p className="text-sm">No se encontraron resultados</p>
                        ) : (
                            <div className="space-y-2">
                                <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                <p className="text-sm">No hay transcripción disponible</p>
                                <p className="text-xs">Inicia una grabación para transcribir</p>
                            </div>
                        )}
                    </div>
                ) : (
                    displaySegments.map((segment, index) => {
                        const isActive = index === activeSegmentIndex;
                        const segmentIndex = searchQuery ? segment.index : index;

                        return (
                            <div
                                key={segmentIndex}
                                ref={isActive ? activeSegmentRef : null}
                                onClick={() => onSeekToTime && onSeekToTime(segment.startTime)}
                                className={`p-3 rounded-lg cursor-pointer transition-all ${isActive
                                        ? 'bg-indigo-500/20 border border-indigo-500/50 shadow-lg'
                                        : 'bg-slate-700/50 border border-transparent hover:bg-slate-700 hover:border-slate-600'
                                    }`}
                            >
                                <div className="flex items-start gap-2">
                                    <div className="flex-shrink-0">
                                        <span className={`text-xs font-mono px-2 py-0.5 rounded ${isActive
                                                ? 'bg-indigo-500 text-white'
                                                : 'bg-slate-600 text-slate-300'
                                            }`}>
                                            {formatTime(segment.startTime)}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className={`text-sm leading-relaxed ${isActive ? 'text-white font-medium' : 'text-slate-200'
                                            }`}>
                                            {searchQuery ? highlightText(segment.text, searchQuery) : segment.text}
                                        </p>
                                        {segment.confidence && segment.confidence < 0.7 && (
                                            <p className="text-xs text-yellow-400 mt-1">
                                                ⚠️ Baja confianza
                                            </p>
                                        )}
                                    </div>
                                    {isActive && (
                                        <ChevronRight className="w-4 h-4 text-indigo-400 flex-shrink-0 animate-pulse" />
                                    )}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Footer stats */}
            {segments.length > 0 && (
                <div className="p-3 border-t border-slate-700 bg-slate-800/50">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>{segments.length} segmento{segments.length !== 1 ? 's' : ''}</span>
                        <span>{segments.reduce((acc, s) => acc + s.text.split(' ').length, 0)} palabras</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TranscriptionPanel;
