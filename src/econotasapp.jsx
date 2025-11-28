<<<<<<< HEAD
const [audioUrl, setAudioUrl] = useState(null);
=======
import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Mic, Square, Play, Pause, PenTool, Clock, RotateCcw, Save, ArrowLeft, Share2, MessageSquare } from 'lucide-react';
import { uploadAudio, saveSession, getSession, auth, addComment, updateComment, deleteComment, subscribeToComments } from './firebase';
import AlertDialog from './components/AlertDialog';
import ConfirmDialog from './components/ConfirmDialog';
import InfiniteCanvas from './components/InfiniteCanvas';
import DrawingToolbar from './components/DrawingToolbar';
import CommentPanel from './components/CommentPanel';
import CommentMarker from './components/CommentMarker';
import { useDrawingHistory } from './hooks/useDrawingHistory';
import { MAX_RECORDING_DURATION_MS, RECORDING_WARNING_TIME_MS, DEFAULT_COLOR, DEFAULT_THICKNESS } from './utils/constants';
import { generateDisplayName, getUserColor } from './utils/userUtils';
>>>>>>> 2ca61a7cabeb28208f73310a6c74b509ccb98f6c

// Drawing tool states (Phase 1)
const [currentTool, setCurrentTool] = useState('pen'); // pen | eraser
const [penColor, setPenColor] = useState(DEFAULT_COLOR);
const [penThickness, setPenThickness] = useState(DEFAULT_THICKNESS);

// Use drawing history hook for undo/redo
const { strokes, setStrokes, undo, redo, canUndo, canRedo, addStroke, deleteStroke, clearHistory } = useDrawingHistory([]);

// Persistence state
const [sessionName, setSessionName] = useState('');
const [isSaving, setIsSaving] = useState(false);
const [isLoading, setIsLoading] = useState(!!sessionId);

// Dialog states
const [alertDialog, setAlertDialog] = useState({ isOpen: false, type: 'info', title: '', message: '' });
const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', message: '', onConfirm: null });

// Recording limits
const [hasShownWarning, setHasShownWarning] = useState(false);

const canvasRef = useRef(null);
const mediaRecorderRef = useRef(null);
const audioChunksRef = useRef([]);
const audioPlayerRef = useRef(null);
const startTimeRef = useRef(0);
const rafRef = useRef(null);
const currentStrokeRef = useRef(null);

<<<<<<< HEAD
// Load session if ID is present
useEffect(() => {
    if (sessionId) {
        const loadData = async () => {
            try {
                const sessionData = await getSession(sessionId);
                if (sessionData) {
                    setSessionName(sessionData.sessionName);
                    setAudioUrl(sessionData.audioUrl);
                    setStrokes(JSON.parse(sessionData.strokes));
                    setDuration(sessionData.durationMs / 1000);
                    // Trigger redraw after state update
                    setTimeout(() => redrawCanvas(0, true), 100);
=======
    // Recording limits
    const [hasShownWarning, setHasShownWarning] = useState(false);

    // Comments state
    const [showCommentPanel, setShowCommentPanel] = useState(false);
    const [comments, setComments] = useState([]);
    const [userName, setUserName] = useState('');
    const [userColor, setUserColor] = useState('#6366f1');

    const canvasRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const audioPlayerRef = useRef(null);
    const startTimeRef = useRef(0);
    const rafRef = useRef(null);
    const currentStrokeRef = useRef(null);
    const unsubscribeCommentsRef = useRef(null);

    // Initialize user identity on mount
    useEffect(() => {
        const initUser = async () => {
            const user = auth.currentUser;
            if (user) {
                const displayName = generateDisplayName(user.uid);
                const color = getUserColor(user.uid);
                setUserName(displayName);
                setUserColor(color);
            }
        };
        initUser();
    }, []);

    // Subscribe to comments when session is loaded
    useEffect(() => {
        if (sessionId) {
            const unsubscribe = subscribeToComments(sessionId, (updatedComments) => {
                setComments(updatedComments);
            });
            unsubscribeCommentsRef.current = unsubscribe;

            return () => {
                if (unsubscribeCommentsRef.current) {
                    unsubscribeCommentsRef.current();
                }
            };
        }
    }, [sessionId]);

    // Load session if ID is present
    useEffect(() => {
        if (sessionId) {
            const loadData = async () => {
                try {
                    const sessionData = await getSession(sessionId);
                    if (sessionData) {
                        setSessionName(sessionData.sessionName);
                        setAudioUrl(sessionData.audioUrl);
                        setStrokes(JSON.parse(sessionData.strokes));
                        setDuration(sessionData.durationMs / 1000);
                        // Trigger redraw after state update
                        setTimeout(() => redrawCanvas(0, true), 100);
                    }
                } catch (error) {
                    console.error("Error loading session:", error);
                    setAlertDialog({
                        isOpen: true,
                        type: 'error',
                        title: 'Error',
                        message: 'Error al cargar la sesión. Por favor intenta nuevamente.'
                    });
                } finally {
                    setIsLoading(false);
>>>>>>> 2ca61a7cabeb28208f73310a6c74b509ccb98f6c
                }
            } catch (error) {
                console.error("Error loading session:", error);
                setAlertDialog({
                    isOpen: true,
                    type: 'error',
                    title: 'Error',
                    message: 'Error al cargar la sesión. Por favor intenta nuevamente.'
                });
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }
}, [sessionId]);

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
}, [strokes, isLoading]); // Re-run when loading finishes

useEffect(() => {
    let interval;
    if (mode === 'RECORDING') {
        interval = setInterval(() => {
            const elapsed = Date.now() - startTimeRef.current;
            setDuration(elapsed / 1000);
            setCurrentTime(elapsed);

            // Show warning at 90% of max duration
            if (!hasShownWarning && elapsed >= RECORDING_WARNING_TIME_MS) {
                setHasShownWarning(true);
                setAlertDialog({
                    isOpen: true,
                    type: 'warning',
                    title: 'Límite de tiempo',
                    message: 'Te quedan aproximadamente 12 minutos de grabación. La sesión se detendrá automáticamente al alcanzar 120 minutos.'
                });
            }

            // Auto-stop at max duration
            if (elapsed >= MAX_RECORDING_DURATION_MS) {
                stopRecording();
                setAlertDialog({
                    isOpen: true,
                    type: 'info',
                    title: 'Grabación completada',
                    message: 'Se alcanzó el límite máximo de 120 minutos. La grabación se detuvo automáticamente.'
                });
            }
        }, 100);
    }
    return () => clearInterval(interval);
}, [mode, hasShownWarning]);

const startRecording = async () => {
    if (readOnly) return;
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
            if (e.data.size > 0) audioChunksRef.current.push(e.data);
        };

        mediaRecorderRef.current.onstop = () => {
            console.log("⏹️ Detenido");
            const blob = new Blob(audioChunksRef.current, { type: mimeType || 'audio/webm' });

            if (blob.size === 0) {
                setAlertDialog({
                    isOpen: true,
                    type: 'error',
                    title: 'Error de grabación',
                    message: 'No se grabó audio. Por favor verifica el acceso al micrófono e intenta nuevamente.'
                });
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
        startTimeRef.current = Date.now();
        setStrokes([]); // This will clear history via the hook if we passed []
        clearHistory(); // Explicitly clear history for new recording
        setHasShownWarning(false);
        setDuration(0);
        setMode('RECORDING');

        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    } catch (err) {
        console.error("❌ Error:", err);
        setAlertDialog({
            isOpen: true,
            type: 'error',
            title: 'Error de micrófono',
            message: `No se pudo acceder al micrófono: ${err.message}`
        });
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
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
        offsetX: (e.clientX - rect.left) * scaleX,
        offsetY: (e.clientY - rect.top) * scaleY,
        pressure: e.pressure
    };
};

const handlePointerDown = (e) => {
    if (mode !== 'RECORDING' || readOnly) return;

    const { offsetX, offsetY, pressure } = getCoordinates(e);
    const timeOffset = Date.now() - startTimeRef.current;

    currentStrokeRef.current = {
        tool: currentTool,
        color: penColor,
        thickness: penThickness,
        startTime: timeOffset,
        points: [{ x: offsetX, y: offsetY, p: pressure || 0.5, t: timeOffset }]
    };

    const ctx = canvasRef.current.getContext('2d');
    ctx.globalCompositeOperation = currentTool === 'eraser' ? 'destination-out' : 'source-over';
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    ctx.lineWidth = (pressure || 0.5) * penThickness;
    ctx.strokeStyle = penColor;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
};

const handlePointerMove = (e) => {
    if (mode !== 'RECORDING' || !currentStrokeRef.current || readOnly) return;
    e.preventDefault();

<<<<<<< HEAD
    const { offsetX, offsetY, pressure } = getCoordinates(e);
    const timeOffset = Date.now() - startTimeRef.current;
=======
    // Comment handlers
    const handleAddComment = async (text) => {
        if (!sessionId || !auth.currentUser) return;

        try {
            await addComment({
                sessionId,
                userId: auth.currentUser.uid,
                userName,
                userColor,
                timestamp: currentTime,
                text
            });
        } catch (error) {
            console.error('Error adding comment:', error);
            setAlertDialog({
                isOpen: true,
                type: 'error',
                title: 'Error',
                message: 'No se pudo agregar el comentario. Intenta nuevamente.'
            });
        }
    };

    const handleEditComment = async (commentId, newText) => {
        try {
            await updateComment(commentId, newText);
        } catch (error) {
            console.error('Error updating comment:', error);
            setAlertDialog({
                isOpen: true,
                type: 'error',
                title: 'Error',
                message: 'No se pudo actualizar el comentario.'
            });
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            await deleteComment(commentId);
        } catch (error) {
            console.error('Error deleting comment:', error);
            setAlertDialog({
                isOpen: true,
                type: 'error',
                title: 'Error',
                message: 'No se pudo eliminar el comentario.'
            });
        }
    };

    const handleSeekToComment = (timestamp) => {
        if (audioPlayerRef.current) {
            audioPlayerRef.current.currentTime = timestamp / 1000;
            setCurrentTime(timestamp);
            redrawCanvas(timestamp, false);
        }
    };

    const handleSaveSession = async () => {
        if (!audioBlob || !auth.currentUser) return;
        if (!sessionName.trim()) {
            setAlertDialog({
                isOpen: true,
                type: 'warning',
                title: 'Nombre requerido',
                message: 'Por favor ingresa un nombre para la sesión antes de guardar.'
            });
            return;
        }
>>>>>>> 2ca61a7cabeb28208f73310a6c74b509ccb98f6c

    currentStrokeRef.current.points.push({
        x: offsetX,
        y: offsetY,
        p: pressure || 0.5,
        t: timeOffset
    });

    const ctx = canvasRef.current.getContext('2d');
    ctx.lineWidth = (pressure || 0.5) * currentStrokeRef.current.thickness;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
};

const handlePointerUp = () => {
    if (mode !== 'RECORDING' || !currentStrokeRef.current || readOnly) return;

    const finishedStroke = currentStrokeRef.current;
    addStroke(finishedStroke);
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

        ctx.globalCompositeOperation = stroke.tool === 'eraser' ? 'destination-out' : 'source-over';
        ctx.beginPath();
        ctx.strokeStyle = stroke.color;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        let hasStarted = false;

        for (let i = 0; i < stroke.points.length; i++) {
            const point = stroke.points[i];
            if (!forceAll && point.t > targetTimeMs) break;

            const baseThickness = stroke.thickness || 4;
            ctx.lineWidth = point.p * baseThickness;

            if (!hasStarted) {
                ctx.moveTo(point.x, point.y);
                hasStarted = true;
            } else {
                ctx.lineTo(point.x, point.y);
            }
        }
        if (hasStarted) ctx.stroke();
    });
    ctx.globalCompositeOperation = 'source-over';
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

const handleSaveSession = async () => {
    if (!audioBlob || !auth.currentUser) return;
    if (!sessionName.trim()) {
        setAlertDialog({
            isOpen: true,
            type: 'warning',
            title: 'Nombre requerido',
            message: 'Por favor ingresa un nombre para la sesión antes de guardar.'
        });
        return;
    }

    setIsSaving(true);
    try {
        // 1. Upload Audio
        const tempId = Date.now().toString(); // Temporary ID for filename
        const downloadUrl = await uploadAudio(audioBlob, tempId);

        // 2. Save Metadata
        const sessionData = {
            userId: auth.currentUser.uid,
            sessionName: sessionName,
            createdAt: new Date(),
            audioUrl: downloadUrl,
            durationMs: duration * 1000,
            strokes: JSON.stringify(strokes)
        };

        await saveSession(sessionData);
        setAlertDialog({
            isOpen: true,
            type: 'success',
            title: '¡Éxito!',
            message: 'Sesión guardada exitosamente. Redirigiendo al panel...'
        });
        setTimeout(() => navigate('/'), 1500);
    } catch (error) {
        console.error("Error saving session:", error);
        setAlertDialog({
            isOpen: true,
            type: 'error',
            title: 'Error al guardar',
            message: `No se pudo guardar la sesión: ${error.message}`
        });
    } finally {
        setIsSaving(false);
    }
};

if (isLoading) {
    return (
<<<<<<< HEAD
        <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
=======
        <div className="flex flex-col h-screen bg-slate-900 text-slate-100 font-sans overflow-y-auto pb-4 pb-[env(safe-area-inset-bottom)]">
            <div className="h-16 border-b border-slate-700 bg-slate-800 flex items-center justify-between px-6 shadow-lg z-10">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate('/')} className="p-2 hover:bg-slate-700 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5 text-slate-400" />
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center transform rotate-12">
                            <PenTool className="w-5 h-5 text-white" />
                        </div>
                        <h1 className="text-xl font-bold tracking-tight hidden sm:block">EcoNotas<span className="text-indigo-400">Notes</span></h1>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-900 py-1 px-4 rounded-full border border-slate-700">
                    <Clock className={`w-4 h-4 ${mode === 'RECORDING' ? 'text-red-500 animate-pulse' : 'text-slate-400'}`} />
                    <span className="font-mono text-lg">{formatTime(mode === 'RECORDING' || mode === 'IDLE' && !audioUrl ? duration * 1000 : currentTime)}</span>
                </div>

                <div className="flex gap-2 items-center">
                    {sessionId && (
                        <button
                            onClick={() => setShowCommentPanel(!showCommentPanel)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold transition-all ${showCommentPanel
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                        >
                            <MessageSquare className="w-4 h-4" />
                            {comments.length > 0 && (
                                <span className="text-sm">{comments.length}</span>
                            )}
                        </button>
                    )}
                    {readOnly && (
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded-full border border-indigo-500/30">
                            SOLO LECTURA
                        </span>
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

                <InfiniteCanvas
                    canvasRef={canvasRef}
                    strokes={strokes}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    mode={mode}
                    readOnly={readOnly}
                />

                <DrawingToolbar
                    currentTool={currentTool}
                    onToolChange={setCurrentTool}
                    penColor={penColor}
                    onColorChange={setPenColor}
                    penThickness={penThickness}
                    onThicknessChange={setPenThickness}
                    canUndo={canUndo && mode !== 'RECORDING'}
                    canRedo={canRedo && mode !== 'RECORDING'}
                    onUndo={undo}
                    onRedo={redo}
                    disabled={mode === 'PLAYING' || readOnly}
                />

                {mode === 'IDLE' && strokes.length === 0 && !readOnly && (
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
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-3">
                            {!readOnly && !sessionId && (
                                <input
                                    type="text"
                                    placeholder="Nombre de la sesión..."
                                    value={sessionName}
                                    onChange={(e) => setSessionName(e.target.value)}
                                    className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                />
                            )}
                            {readOnly && (
                                <p className="text-lg font-semibold text-indigo-300">{sessionName}</p>
                            )}
                        </div>
                        {/* Hidden audio element for playback control */}
                        <audio
                            ref={audioPlayerRef}
                            src={audioUrl}
                            className="hidden"
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
                    <div className="relative mb-4">
                        <input
                            type="range"
                            min="0"
                            max={audioPlayerRef.current.duration || duration}
                            value={currentTime / 1000}
                            onChange={handleSeek}
                            className="w-full h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        {/* Comment markers on timeline */}
                        {comments.map((comment) => (
                            <CommentMarker
                                key={comment.id}
                                comment={comment}
                                duration={duration * 1000}
                                onSeek={handleSeekToComment}
                            />
                        ))}
                    </div>
                )}

                <div className="flex items-center justify-center gap-6">
                    {mode === 'IDLE' || mode === 'PAUSED' ? (
                        !audioUrl ? (
                            !readOnly && (
                                <button
                                    onClick={startRecording}
                                    className="flex items-center gap-2 px-8 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-all shadow-lg shadow-red-900/20 active:scale-95"
                                >
                                    <Mic className="w-5 h-5" /> GRABAR
                                </button>
                            )
                        ) : (
                            <div className="flex gap-4">
                                <button
                                    onClick={togglePlayback}
                                    className="flex items-center gap-2 px-8 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-900/20"
                                >
                                    <Play className="w-5 h-5 fill-current" /> REPRODUCIR
                                </button>

                                {!readOnly && !sessionId && (
                                    <>
                                        <button
                                            onClick={handleSaveSession}
                                            disabled={isSaving}
                                            className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold transition-all shadow-lg shadow-green-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSaving ? (
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            ) : (
                                                <Save className="w-5 h-5" />
                                            )}
                                            {isSaving ? 'GUARDANDO...' : 'GUARDAR'}
                                        </button>

                                        <button
                                            onClick={() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: '¿Reiniciar grabación?',
                                                    message: '¿Estás seguro? Se perderá la grabación actual y no podrás recuperarla.',
                                                    variant: 'destructive',
                                                    onConfirm: () => {
                                                        setAudioUrl(null);
                                                        setAudioBlob(null);
                                                        setStrokes([]);
                                                        clearHistory();
                                                        setDuration(0);
                                                        setSessionName('');
                                                        setHasShownWarning(false);
                                                        if (canvasRef.current) {
                                                            const ctx = canvasRef.current.getContext('2d');
                                                            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                                                        }
                                                    }
                                                });
                                            }}
                                            className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full text-slate-300"
                                            title="Reiniciar"
                                        >
                                            <RotateCcw className="w-5 h-5" />
                                        </button>
                                    </>
                                )}
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

            {/* Dialogs */}
>>>>>>> 2ca61a7cabeb28208f73310a6c74b509ccb98f6c
            <AlertDialog
                isOpen={alertDialog.isOpen}
                onClose={() => setAlertDialog({ ...alertDialog, isOpen: false })}
                type={alertDialog.type}
                title={alertDialog.title}
                message={alertDialog.message}
            />
            <ConfirmDialog
                isOpen={confirmDialog.isOpen}
                onClose={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
                onConfirm={confirmDialog.onConfirm}
                onCancel={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
                title={confirmDialog.title}
                message={confirmDialog.message}
                variant={confirmDialog.variant}
            />

            {/* Comment Panel */}
            {sessionId && (
                <CommentPanel
                    isOpen={showCommentPanel}
                    onClose={() => setShowCommentPanel(false)}
                    sessionId={sessionId}
                    comments={comments}
                    currentTime={currentTime}
                    onSeekToTime={handleSeekToComment}
                    userId={auth.currentUser?.uid}
                    userName={userName}
                    userColor={userColor}
                    canEdit={!readOnly}
                    onAddComment={handleAddComment}
                    onEditComment={handleEditComment}
                    onDeleteComment={handleDeleteComment}
                />
            )}
        </div>
    );
};

export default EcoNotasApp;