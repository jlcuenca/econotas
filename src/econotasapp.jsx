const [audioUrl, setAudioUrl] = useState(null);

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

    const { offsetX, offsetY, pressure } = getCoordinates(e);
    const timeOffset = Date.now() - startTimeRef.current;

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
        <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
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
        </div>
    );
};

export default EcoNotasApp;