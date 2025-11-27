import React from 'react';
import { Eraser, RotateCcw, RotateCw, Palette } from 'lucide-react';
import ColorPicker from './ColorPicker';
import { MIN_THICKNESS, MAX_THICKNESS } from '../utils/constants';

const DrawingToolbar = ({
    currentTool,
    onToolChange,
    penColor,
    onColorChange,
    penThickness,
    onThicknessChange,
    canUndo,
    canRedo,
    onUndo,
    onRedo,
    disabled = false
}) => {
    const [showColorPicker, setShowColorPicker] = React.useState(false);

    return (
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-3">
            {/* Main Toolbar */}
            <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-3 border border-slate-700 shadow-lg">
                <div className="flex flex-col gap-3">
                    {/* Tool Selection */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => onToolChange('pen')}
                            className={`p-2 rounded-lg transition-colors ${currentTool === 'pen'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                            title="Lápiz"
                            disabled={disabled}
                        >
                            <Palette className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => onToolChange('eraser')}
                            className={`p-2 rounded-lg transition-colors ${currentTool === 'eraser'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                            title="Borrador"
                            disabled={disabled}
                        >
                            <Eraser className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Undo/Redo */}
                    <div className="flex gap-2">
                        <button
                            onClick={onUndo}
                            disabled={!canUndo || disabled}
                            className={`p-2 rounded-lg transition-colors ${canUndo && !disabled
                                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                    : 'bg-slate-800 text-slate-600 cursor-not-allowed'
                                }`}
                            title="Deshacer"
                        >
                            <RotateCcw className="w-5 h-5" />
                        </button>
                        <button
                            onClick={onRedo}
                            disabled={!canRedo || disabled}
                            className={`p-2 rounded-lg transition-colors ${canRedo && !disabled
                                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                    : 'bg-slate-800 text-slate-600 cursor-not-allowed'
                                }`}
                            title="Rehacer"
                        >
                            <RotateCw className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Color Toggle (only show for pen) */}
                    {currentTool === 'pen' && (
                        <button
                            onClick={() => setShowColorPicker(!showColorPicker)}
                            className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                            disabled={disabled}
                            title="Selector de color"
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-6 h-6 rounded border-2 border-slate-600"
                                    style={{ backgroundColor: penColor }}
                                />
                                <span className="text-xs text-slate-300">Color</span>
                            </div>
                        </button>
                    )}

                    {/* Thickness Slider (only show for pen) */}
                    {currentTool === 'pen' && (
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-medium text-slate-400">
                                Grosor: {penThickness}px
                            </label>
                            <input
                                type="range"
                                min={MIN_THICKNESS}
                                max={MAX_THICKNESS}
                                value={penThickness}
                                onChange={(e) => onThicknessChange(Number(e.target.value))}
                                disabled={disabled}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                            />
                            {/* Thickness Preview */}
                            <div className="flex justify-center">
                                <div
                                    className="rounded-full"
                                    style={{
                                        width: `${penThickness}px`,
                                        height: `${penThickness}px`,
                                        backgroundColor: penColor,
                                        minWidth: '4px',
                                        minHeight: '4px'
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Color Picker Popover */}
            {showColorPicker && currentTool === 'pen' && (
                <div className="bg-slate-800/95 backdrop-blur-sm rounded-xl p-3 border border-slate-700 shadow-lg">
                    <ColorPicker
                        selectedColor={penColor}
                        onColorChange={(color) => {
                            onColorChange(color);
                            setShowColorPicker(false);
                        }}
                        disabled={disabled}
                    />
                </div>
            )}
        </div>
    );
};

export default DrawingToolbar;
