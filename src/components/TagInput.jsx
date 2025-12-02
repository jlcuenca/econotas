import React, { useState, useRef, useEffect } from 'react';
import { X, Tag } from 'lucide-react';

const TagInput = ({ tags = [], onChange, suggestions = [], placeholder = "Agregar etiquetas..." }) => {
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const inputRef = useRef(null);

    const filteredSuggestions = suggestions.filter(
        s => !tags.includes(s.tag) && s.tag.toLowerCase().includes(inputValue.toLowerCase())
    );

    const addTag = (tag) => {
        const trimmed = tag.trim().toLowerCase();
        if (trimmed && !tags.includes(trimmed)) {
            onChange([...tags, trimmed]);
        }
        setInputValue('');
        setShowSuggestions(false);
    };

    const removeTag = (tagToRemove) => {
        onChange(tags.filter(t => t !== tagToRemove));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            if (inputValue.trim()) {
                addTag(inputValue);
            }
        } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
            removeTag(tags[tags.length - 1]);
        }
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
            <div className="flex flex-wrap items-center gap-2 p-2 bg-slate-700 border border-slate-600 rounded-lg focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border ${getTagColor(tag)}`}
                    >
                        <Tag className="w-3 h-3" />
                        {tag}
                        <button
                            onClick={() => removeTag(tag)}
                            className="hover:bg-white/10 rounded-full p-0.5 transition-colors"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </span>
                ))}

                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        setShowSuggestions(e.target.value.length > 0);
                    }}
                    onKeyDown={handleKeyDown}
                    onFocus={() => inputValue && setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    placeholder={tags.length === 0 ? placeholder : ''}
                    className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-white placeholder-slate-500 text-sm"
                />
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-700 rounded-lg shadow-xl max-h-48 overflow-y-auto z-10">
                    {filteredSuggestions.slice(0, 10).map((suggestion) => (
                        <button
                            key={suggestion.tag}
                            onClick={() => addTag(suggestion.tag)}
                            className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-slate-700 transition-colors"
                        >
                            <span className="text-white text-sm">{suggestion.tag}</span>
                            <span className="text-slate-400 text-xs">{suggestion.count}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TagInput;
