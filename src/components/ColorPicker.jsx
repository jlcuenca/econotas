import React from 'react';
import { COLOR_PALETTE } from '../utils/constants';

const ColorPicker = ({ selectedColor, onColorChange, disabled = false }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-slate-400">Color</label>
            <div className="grid grid-cols-4 gap-2">
                {COLOR_PALETTE.map((color) => (
                    <button
                        key={color.value}
                        onClick={() => !disabled && onColorChange(color.value)}
                        disabled={disabled}
                        className={`
              w-10 h-10 rounded-lg border-2 transition-all
              ${selectedColor === color.value
                                ? 'border-indigo-400 scale-110 shadow-lg'
                                : 'border-slate-700 hover:border-slate-600 hover:scale-105'}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                        aria-label={`Select ${color.name} color`}
                    >
                        {selectedColor === color.value && (
                            <div className="flex items-center justify-center">
                                <span className={`text-2xl ${color.value === '#ffffff' || color.value === '#eab308' ? 'text-slate-900' : 'text-white'}`}>
                                    ✓
                                </span>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ColorPicker;
