import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ value, onChange, placeholder = "Buscar sesiones..." }) => {
    return (
        <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            {value && (
                <button
                    onClick={() => onChange('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-0.5 text-slate-400 hover:text-white transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
