import React from 'react';
import { Eraser, RotateCcw, RotateCw, Palette } from 'lucide-react';
import ColorPicker from './ColorPicker';
import { MIN_THICKNESS, MAX_THICKNESS } from '../utils/constants';
import Button from './Button';

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
            <div className="bg-[var(--bg-card)]/90 backdrop-blur-md rounded-2xl p-3 border border-[var(--border)] shadow-xl transition-all duration-300">
                <div className="flex flex-col gap-3">
                    {/* Tool Selection */}
                    <div className="flex gap-2">
                        <Button
                            onClick={() => onToolChange('pen')}
                            variant={currentTool === 'pen' ? 'primary' : 'secondary'}
                            disabled={disabled}
                            label="Lápiz"
                        >
                            <Palette className="w-5 h-5" />
                        </Button>
                        <Button
                            onClick={() => onToolChange('eraser')}
                            variant={currentTool === 'eraser' ? 'primary' : 'secondary'}
                            disabled={disabled}
                            label="Borrador"
                        >
                            <Eraser className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Undo/Redo */}
                    <div className="flex gap-2">
                        <Button
                            onClick={onUndo}
                            disabled={!canUndo || disabled}
                            variant="secondary"
                            label="Deshacer"
                        >
                            <RotateCcw className="w-5 h-5" />
                        </Button>
                        <Button
                            onClick={onRedo}
                            disabled={!canRedo || disabled}
                            variant="secondary"
                            label="Rehacer"
                        >
                            <RotateCw className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Color Toggle (only show for pen) */}
                    {currentTool === 'pen' && (
                        <Button
                            onClick={() => setShowColorPicker(!showColorPicker)}
                            variant="secondary"
                            disabled={disabled}
                            label="Selector de color"
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-6 h-6 rounded-full border border-[var(--border)] shadow-sm"
                                    style={{ backgroundColor: penColor }}
                                />
                                <span className="text-xs font-medium">Color</span>
                            </div>
                        </Button>
                    )}

                    {/* Thickness Slider (only show for pen) */}
                    {currentTool === 'pen' && (
                        <div className="flex flex-col gap-2 pt-2 border-t border-[var(--border)]">
                            <label className="text-xs font-medium text-[var(--text)] opacity-70">
                                Grosor: {penThickness}px
                            </label>
                            <input
                                type="range"
                                min={MIN_THICKNESS}
                                max={MAX_THICKNESS}
                                value={penThickness}
                                onChange={(e) => onThicknessChange(Number(e.target.value))}
                                disabled={disabled}
                                className="w-full h-2 bg-[var(--bg)] rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
                            />
                            {/* Thickness Preview */}
                            <div className="flex justify-center py-1">
                                <div
                                    className="rounded-full transition-all duration-200"
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
                <div className="bg-[var(--bg-card)]/95 backdrop-blur-md rounded-2xl p-3 border border-[var(--border)] shadow-xl animate-in fade-in zoom-in-95 duration-200">
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
