import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

const InfiniteCanvas = ({
    canvasRef,
    strokes,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    mode,
    readOnly
}) => {
    const transformRef = React.useRef(null);

    // Save zoom/pan state to sessionStorage
    const saveViewportState = (state) => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('econotas-viewport', JSON.stringify({
                zoom: state.scale,
                positionX: state.positionX,
                positionY: state.positionY
            }));
        }
    };

    // Load zoom/pan state from sessionStorage
    const loadViewportState = () => {
        if (typeof window !== 'undefined') {
            const saved = sessionStorage.getItem('econotas-viewport');
            if (saved) {
                try {
                    return JSON.parse(saved);
                } catch (e) {
                    return null;
                }
            }
        }
        return null;
    };

    React.useEffect(() => {
        // Restore viewport state on mount
        const savedState = loadViewportState();
        if (savedState && transformRef.current) {
            transformRef.current.setTransform(
                savedState.positionX,
                savedState.positionY,
                savedState.zoom,
                0 // no animation on initial load
            );
        }
    }, []);

    return (
        <TransformWrapper
            ref={transformRef}
            minScale={0.5}
            maxScale={5}
            initialScale={1}
            centerOnInit={true}
            wheel={{ step: 0.1 }}
            panning={{
                disabled: mode === 'RECORDING', // Disable pan while recording
                velocityDisabled: false
            }}
            doubleClick={{ disabled: true }}
            onTransformed={(ref) => {
                saveViewportState(ref.state);
            }}
        >
            {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                    {/* Zoom Controls */}
                    <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                        <button
                            onClick={() => zoomIn()}
                            className="p-2 bg-slate-800/90 hover:bg-slate-700 rounded-lg text-white backdrop-blur-sm transition-colors border border-slate-700 shadow-lg"
                            title="Zoom in"
                            disabled={readOnly}
                        >
                            <ZoomIn className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => zoomOut()}
                            className="p-2 bg-slate-800/90 hover:bg-slate-700 rounded-lg text-white backdrop-blur-sm transition-colors border border-slate-700 shadow-lg"
                            title="Zoom out"
                            disabled={readOnly}
                        >
                            <ZoomOut className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => resetTransform()}
                            className="p-2 bg-slate-800/90 hover:bg-slate-700 rounded-lg text-white backdrop-blur-sm transition-colors border border-slate-700 shadow-lg"
                            title="Reset zoom"
                            disabled={readOnly}
                        >
                            <Maximize2 className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Transformable Canvas */}
                    <TransformComponent
                        wrapperStyle={{
                            width: '100%',
                            height: '100%',
                            cursor: mode === 'RECORDING' ? 'crosshair' : 'grab'
                        }}
                        contentStyle={{
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <canvas
                            ref={canvasRef}
                            onPointerDown={onPointerDown}
                            onPointerMove={onPointerMove}
                            onPointerUp={onPointerUp}
                            onPointerLeave={onPointerUp}
                            className="touch-none"
                            style={{
                                touchAction: 'none',
                                cursor: mode === 'RECORDING' ? 'crosshair' : 'default'
                            }}
                        />
                    </TransformComponent>
                </>
            )}
        </TransformWrapper>
    );
};

export default InfiniteCanvas;
