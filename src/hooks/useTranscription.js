import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Custom hook for real-time audio transcription using Web Speech API
 * @param {string} language - Language code (e.g., 'es-ES', 'en-US')
 * @returns {Object} Transcription controls and data
 */
export const useTranscription = (language = 'es-ES') => {
    const [segments, setSegments] = useState([]);
    const [isTranscribing, setIsTranscribing] = useState(false);
    const [error, setError] = useState(null);

    const recognitionRef = useRef(null);
    const startTimeRef = useRef(0);
    const currentSegmentRef = useRef('');

    // Check browser support
    const isSupported = useCallback(() => {
        return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
    }, []);

    // Initialize speech recognition
    const initRecognition = useCallback(() => {
        if (!isSupported()) {
            setError('Tu navegador no soporta transcripción automática. Usa Chrome o Edge.');
            return null;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = language;
        recognition.maxAlternatives = 1;

        return recognition;
    }, [language, isSupported]);

    // Start transcription
    const startTranscription = useCallback((recordingStartTime) => {
        if (!isSupported()) {
            setError('Transcripción no soportada en este navegador');
            return;
        }

        try {
            const recognition = initRecognition();
            if (!recognition) return;

            startTimeRef.current = recordingStartTime || Date.now();
            currentSegmentRef.current = '';
            setSegments([]);
            setError(null);

            recognition.onstart = () => {
                console.log('🎙️ Transcripción iniciada');
                setIsTranscribing(true);
            };

            recognition.onresult = (event) => {
                let interimTranscript = '';
                let finalTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    const confidence = event.results[i][0].confidence;

                    if (event.results[i].isFinal) {
                        finalTranscript += transcript + ' ';

                        // Create new segment
                        const now = Date.now();
                        const startTime = now - startTimeRef.current - (transcript.split(' ').length * 200); // Approximate
                        const endTime = now - startTimeRef.current;

                        const newSegment = {
                            text: transcript.trim(),
                            startTime: Math.max(0, startTime),
                            endTime: endTime,
                            confidence: confidence || 0.9,
                            timestamp: new Date().toISOString()
                        };

                        setSegments(prev => [...prev, newSegment]);
                        currentSegmentRef.current = '';
                    } else {
                        interimTranscript += transcript;
                        currentSegmentRef.current = interimTranscript;
                    }
                }
            };

            recognition.onerror = (event) => {
                console.error('❌ Error de transcripción:', event.error);

                if (event.error === 'no-speech') {
                    // Silencio detectado, reintentar
                    console.log('⚠️ No se detectó voz, continuando...');
                } else if (event.error === 'network') {
                    setError('Error de red. Verifica tu conexión a internet.');
                } else {
                    setError(`Error de transcripción: ${event.error}`);
                }
            };

            recognition.onend = () => {
                console.log('⏹️ Transcripción detenida');
                setIsTranscribing(false);

                // Auto-restart if still recording (handles silence timeout)
                if (recognitionRef.current && isTranscribing) {
                    try {
                        recognition.start();
                    } catch (e) {
                        console.log('No se pudo reiniciar transcripción');
                    }
                }
            };

            recognition.start();
            recognitionRef.current = recognition;

        } catch (err) {
            console.error('Error iniciando transcripción:', err);
            setError('No se pudo iniciar la transcripción');
            setIsTranscribing(false);
        }
    }, [initRecognition, isSupported]);

    // Stop transcription
    const stopTranscription = useCallback(() => {
        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
                recognitionRef.current = null;
                setIsTranscribing(false);
                console.log('✅ Transcripción finalizada');
            } catch (err) {
                console.error('Error deteniendo transcripción:', err);
            }
        }
    }, []);

    // Get full text from segments
    const getFullText = useCallback(() => {
        return segments.map(s => s.text).join(' ');
    }, [segments]);

    // Search in transcription
    const searchInTranscript = useCallback((query) => {
        if (!query.trim()) return [];

        const lowerQuery = query.toLowerCase();
        return segments
            .map((segment, index) => ({
                ...segment,
                index,
                matches: segment.text.toLowerCase().includes(lowerQuery)
            }))
            .filter(s => s.matches);
    }, [segments]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    return {
        segments,
        isTranscribing,
        error,
        isSupported: isSupported(),
        startTranscription,
        stopTranscription,
        getFullText,
        searchInTranscript,
        currentSegment: currentSegmentRef.current
    };
};
