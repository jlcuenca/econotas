import React from 'react';
import { LayoutGrid, List } from 'lucide-react';

const ViewToggle = ({ view, onViewChange }) => {
    return (
        <div className="flex gap-1 bg-slate-800 rounded-lg p-1">
            <button
                onClick={() => onViewChange('grid')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'grid'
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                title="Vista en cuadrícula"
            >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">Grid</span>
            </button>
            <button
                onClick={() => onViewChange('list')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'list'
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                title="Vista en lista"
            >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline">Lista</span>
            </button>
        </div>
    );
};

export default ViewToggle;
