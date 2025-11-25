import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play, Pause, PenTool, Clock, RotateCcw, Download } from 'lucide-react';

const EcoNotasApp = () => {
    const [mode, setMode] = useState('IDLE');
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [strokes, setStrokes] = useState([]);
    const [audioBlob, setAudioBlob] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);
    const [penColor] = useState('#e2e8f0');

    const canvasRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const audioPlayerRef = useRef(null);
    const startTimeRef = useRef(0);
    const rafRef = useRef(null);
    const currentStrokeRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            redrawCanvas(0, true);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => window.removeEventListener('resize', resizeCanvas);
    }, [strokes]);

    useEffect(() => {
        let interval;
        if (mode === 'RECORDING') {
            interval = setInterval(() => {
                setDuration(d => d + 1);
                setCurrentTime(Date.now() - startTimeRef.current);
            }, 100);
        }
        return () => clearInterval(interval);
    }, [mode]);

    const startRecording = async () => {
        try {
            console.log("🎤 Solicitando micrófono");
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            console.log("✅ Acceso concedido");

            const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' :
                MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '';
            console.log(`🎵 MIME: ${mimeType || 'default'}`);

            const options = mimeType ? { mimetype: mimeType } : undefined;
            mediaRecorderRef.current = new MediaRecorder(stream, options);
            audioChunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (e) => {
                console.log(`📦 ${e.data.size} bytes`);
                if (e.data.size > 0) audioChunksRef.current.push(e.data);
            };

            mediaRecorderRef.current.onstop = () => {
                console.log("⏹️ Detenido");
                const blob = new Blob(audioChunksRef.current, { type: mimeType || 'audio/webm' });
                console.log(`🎬 Blob: ${blob.size} bytes`);

                if (blob.size === 0) {
                    alert("No se grabó audio");
                    return;
                }

                const url = URL.createObjectURL(blob);
                setAudioBlob(blob);
                setAudioUrl(url);
                console.log("✅ Audio listo");
            };

            mediaRecorderRef.current.start();
            console.log("🔴 Grabando");
            startTimeRef.current = Date.now();
            setStrokes([]);
            setDuration(0);
            setMode('RECORDING');

            const ctx = canvasRef.current.getContext('2d');
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        } catch (err) {
            console.error("❌ Error:", err);
            alert("Error: " + err.message);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mode === 'RECORDING') {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
            setMode('IDLE');
        }
    };

    const getCoordinates = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        return {
            offsetX: e.clientX - rect.left,
            offsetY: e.clientY - rect.top,
            pressure: e.pressure
        };
    };

    const handlePointerDown = (e) => {
        if (mode !== 'RECORDING') return;

        const { offsetX, offsetY, pressure } = getCoordinates(e);
        const timeOffset = Date.now() - startTimeRef.current;

        currentStrokeRef.current = {
            color: penColor,
            startTime: timeOffset,
            points: [{ x: offsetX, y: offsetY, p: pressure || 0.5, t: timeOffset }]
        };

        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
        ctx.lineWidth = (pressure || 0.5) * 8;
        ctx.strokeStyle = penColor;
    };

    const handlePointerMove = (e) => {
        if (mode !== 'RECORDING' || !currentStrokeRef.current) return;
        e.preventDefault();

        const { offsetX, offsetY, pressure } = getCoordinates(e);
        const timeOffset = Date.now() - startTimeRef.current;

        currentStrokeRef.current.points.push({
            x: offsetX,
            y: offsetY,
            p: pressure || 0.5,
            t: timeOffset
        });

        const ctx = canvasRef.current.getContext('2d');
        ctx.lineWidth = (pressure || 0.5) * 8;
        ctx.lineCap = 'round';
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
    };

    const handlePointerUp = () => {
        if (mode !== 'RECORDING' || !currentStrokeRef.current) return;

        const finishedStroke = currentStrokeRef.current;
        setStrokes(prev => [...prev, finishedStroke]);
        currentStrokeRef.current = null;
    };

    const togglePlayback = async () => {
        if (!audioUrl || !audioPlayerRef.current) return;

        if (mode === 'PLAYING') {
            audioPlayerRef.current.pause();
            setMode('PAUSED');
            cancelAnimationFrame(rafRef.current);
        } else {
            try {
                await audioPlayerRef.current.play();
                setMode('PLAYING');
                animate();
            } catch (err) {
                console.error("❌ Error:", err);
            }
        }
    };

    const animate = () => {
        if (!audioPlayerRef.current || audioPlayerRef.current.paused || audioPlayerRef.current.ended) {
            if (audioPlayerRef.current && audioPlayerRef.current.ended) setMode('IDLE');
            return;
        }

        const playHead = audioPlayerRef.current.currentTime * 1000;
        setCurrentTime(playHead);
        redrawCanvas(playHead, false);
        rafRef.current = requestAnimationFrame(animate);
    };

    const redrawCanvas = (targetTimeMs, forceAll = false) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        strokes.forEach(stroke => {
            if (!stroke) return;
            if (!forceAll && stroke.startTime > targetTimeMs) return;

            ctx.beginPath();
            ctx.strokeStyle = stroke.color;

            let hasStarted = false;

            for (let i = 0; i < stroke.points.length; i++) {
                const point = stroke.points[i];
                if (!forceAll && point.t > targetTimeMs) break;

                ctx.lineWidth = point.p * 8;

                if (!hasStarted) {
                    ctx.moveTo(point.x, point.y);
                    hasStarted = true;
                } else {
                    ctx.lineTo(point.x, point.y);
                }
            }
            if (hasStarted) ctx.stroke();
        });
    };

    const handleSeek = (e) => {
        if (!audioPlayerRef.current) return;
        const seekTime = Number(e.target.value);
        audioPlayerRef.current.currentTime = seekTime;
        setCurrentTime(seekTime * 1000);
        redrawCanvas(seekTime * 1000, false);
    };

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const downloadSession = () => {
        const data = {
            date: new Date().toISOString(),
            duration: duration,
            strokes: strokes
        };
        const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = "sesion-econotas.json";
        a.click();

        if (audioUrl) {
            const a2 = document.createElement('a');
            a2.href = audioUrl;
            a2.download = "sesion-econotas.webm";
            a2.click();
        }
    };

    return (
        <div className="flex flex-col h-screen bg-slate-900 text-slate-100 font-sans overflow-y-auto">
            <div className="h-16 border-b border-slate-700 bg-slate-800 flex items-center justify-between px-6 shadow-lg z-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center transform rotate-12">
                        <PenTool className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">EcoNotas<span className="text-indigo-400">Notes</span></h1>
                </div>

                <div className="flex items-center gap-4 bg-slate-900 py-1 px-4 rounded-full border border-slate-700">
                    <Clock className={`w-4 h-4 ${mode === 'RECORDING' ? 'text-red-500 animate-pulse' : 'text-slate-400'}`} />
                    <span className="font-mono text-lg">{formatTime(mode === 'RECORDING' || mode === 'IDLE' && !audioUrl ? duration * 1000 : currentTime)}</span>
                </div>

                <div className="flex gap-2">
                    {audioUrl && (
                        <button onClick={downloadSession} className="p-2 hover:bg-slate-700 rounded-full transition-colors">
                            <Download className="w-5 h-5 text-slate-400" />
                        </button>
                    )}
                </div>
            </div>

            <div className="flex-1 relative bg-slate-900 cursor-crosshair touch-none">
                <div className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}>
                </div>

                <canvas
                    ref={canvasRef}
                    className="w-full h-full block touch-none"
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                />

                {mode === 'IDLE' && strokes.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center text-slate-500">
                            <Mic className="w-12 h-12 mx-auto mb-2 opacity-50" />
                            <p className="text-lg">Presiona Grabar para comenzar</p>
                            <p className="text-sm opacity-60">Usa tu stylus o mouse</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-slate-800 border-t border-slate-700 p-4 flex flex-col justify-center">
                {audioUrl && (
                    <div className="mb-4 bg-slate-700 p-3 rounded-lg">
                        <p className="text-xs text-slate-400 mb-2">🔊 Controles de Audio</p>
                        <audio
                            ref={audioPlayerRef}
                            src={audioUrl}
                            controls
                            className="w-full"
                            onPlay={() => {
                                console.log("▶️ Play");
                                setMode('PLAYING');
                                animate();
                            }}
                            onPause={() => {
                                console.log("⏸️ Pause");
                                setMode('PAUSED');
                                cancelAnimationFrame(rafRef.current);
                            }}
                            onEnded={() => {
                                console.log("✅ Ended");
                                setMode('IDLE');
                            }}
                        />
                    </div>
                )}

                {audioUrl && audioPlayerRef.current && (
                    <input
                        type="range"
                        min="0"
                        max={audioPlayerRef.current.duration || duration}
                        value={currentTime / 1000}
                        onChange={handleSeek}
                        className="w-full h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer mb-4 accent-indigo-500"
                    />
                )}

                <div className="flex items-center justify-center gap-6">
                    {mode === 'IDLE' || mode === 'PAUSED' ? (
                        !audioUrl ? (
                            <button
                                onClick={startRecording}
                                className="flex items-center gap-2 px-8 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-all shadow-lg shadow-red-900/20 active:scale-95"
                            >
                                <Mic className="w-5 h-5" /> GRABAR
                            </button>
                        ) : (
                            <div className="flex gap-4">
                                <button
                                    onClick={togglePlayback}
                                    className="flex items-center gap-2 px-8 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-900/20"
                                >
                                    <Play className="w-5 h-5 fill-current" /> REPRODUCIR NOTAS
                                </button>
                                <button
                                    onClick={() => {
                                        setAudioUrl(null);
                                        setStrokes([]);
                                        setDuration(0);
                                        if (canvasRef.current) {
                                            const ctx = canvasRef.current.getContext('2d');
                                            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                                        }
                                    }}
                                    className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full text-slate-300"
                                >
                                    <RotateCcw className="w-5 h-5" />
                                </button>
                            </div>
                        )
                    ) : (
                        mode === 'RECORDING' ? (
                            <button
                                onClick={stopRecording}
                                className="flex items-center gap-2 px-8 py-2 bg-slate-200 text-slate-900 hover:bg-white rounded-full font-bold transition-all animate-pulse"
                            >
                                <Square className="w-5 h-5 fill-current" /> DETENER
                            </button>
                        ) : (
                            <button
                                onClick={togglePlayback}
                                className="flex items-center gap-2 px-8 py-2 bg-yellow-500 text-black hover:bg-yellow-400 rounded-full font-bold transition-all"
                            >
                                <Pause className="w-5 h-5 fill-current" /> PAUSA
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default EcoNotasApp;