import React, { useState } from 'react';
import { Tag, X, ChevronDown } from 'lucide-react';

const TagFilter = ({ availableTags = [], selectedTags = [], onTagsChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            onTagsChange(selectedTags.filter(t => t !== tag));
        } else {
            onTagsChange([...selectedTags, tag]);
        }
    };

    const clearAll = () => {
        onTagsChange([]);
        setIsOpen(false);
    };

    const TAG_COLORS = [
        'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
        'bg-blue-500/20 text-blue-300 border-blue-500/30',
        'bg-green-500/20 text-green-300 border-green-500/30',
        'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
        'bg-purple-500/20 text-purple-300 border-purple-500/30',
        'bg-pink-500/20 text-pink-300 border-pink-500/30',
    ];

    const getTagColor = (tag) => {
        const hash = tag.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return TAG_COLORS[hash % TAG_COLORS.length];
    };

    return (
        <div className="relative">
            < button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedTags.length > 0
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-700 border border-slate-600 text-white hover:bg-slate-600'
                    }`}
            >
                <Tag className="w-4 h-4" />
                Etiquetas
                {
                    selectedTags.length > 0 && (
                        <span className="px-1.5 py-0.5 bg-white/20 rounded-full text-xs">
                            {selectedTags.length}
                        </span>
                    )
                }
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button >

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full right-0 mt-2 w-72 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-20 max-h-96 overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="p-3 border-b border-slate-700 flex items-center justify-between">
                            <span className="text-sm font-medium text-white">Filtrar por etiquetas</span>
                            {selectedTags.length > 0 && (
                                <button
                                    onClick={clearAll}
                                    className="text-xs text-indigo-400 hover:text-indigo-300"
                                >
                                    Limpiar todo
                                </button>
                            )}
                        </div>

                        {/* Tag List */}
                        <div className="overflow-y-auto p-2">
                            {availableTags.length === 0 ? (
                                <div className="p-4 text-center text-slate-400 text-sm">
                                    No hay etiquetas disponibles
                                </div>
                            ) : (
                                <div className="space-y-1">
                                    {availableTags.map(({ tag, count }) => {
                                        const isSelected = selectedTags.includes(tag);
                                        return (
                                            <button
                                                key={tag}
                                                onClick={() => toggleTag(tag)}
                                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${isSelected
                                                    ? 'bg-indigo-600 text-white'
                                                    : 'hover:bg-slate-700 text-slate-300'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${isSelected
                                                        ? 'bg-white border-white'
                                                        : 'border-slate-600'
                                                        }`}>
                                                        {isSelected && (
                                                            <svg className="w-3 h-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                    <span className={`text-sm font-medium px-2 py-0.5 rounded border ${isSelected ? 'bg-white/20 border-white/30' : getTagColor(tag)
                                                        }`}>
                                                        {tag}
                                                    </span>
                                                </div>
                                                <span className={`text-xs ${isSelected ? 'text-indigo-200' : 'text-slate-400'
                                                    }`}>
                                                    {count}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div >
    );
};

export default TagFilter;
