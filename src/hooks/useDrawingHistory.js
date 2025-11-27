import { useState, useCallback } from 'react';
import { MAX_HISTORY_LENGTH } from '../utils/constants';

/**
 * Custom hook for managing undo/redo history of strokes
 * @param {Array} initialStrokes - Initial array of strokes
 * @returns {Object} - { strokes, setStrokes, undo, redo, canUndo, canRedo, addStroke, clearHistory }
 */
export const useDrawingHistory = (initialStrokes = []) => {
    const [strokes, setStrokes] = useState(initialStrokes);
    const [history, setHistory] = useState({
        past: [],
        future: []
    });

    const canUndo = history.past.length > 0;
    const canRedo = history.future.length > 0;

    // Add a new stroke to history
    const addStroke = useCallback((newStroke) => {
        setStrokes(currentStrokes => {
            const newStrokes = [...currentStrokes, newStroke];

            // Update history
            setHistory(h => ({
                past: [...h.past, currentStrokes].slice(-MAX_HISTORY_LENGTH),
                future: [] // Clear future when new action is performed
            }));

            return newStrokes;
        });
    }, []);

    // Update strokes directly (for loading sessions)
    const updateStrokes = useCallback((newStrokes) => {
        setStrokes(newStrokes);
        // Clear history when loading a session
        setHistory({ past: [], future: [] });
    }, []);

    // Undo last action
    const undo = useCallback(() => {
        if (!canUndo) return;

        setHistory(h => {
            const previous = h.past[h.past.length - 1];
            const newPast = h.past.slice(0, -1);

            setStrokes(previous);

            return {
                past: newPast,
                future: [strokes, ...h.future].slice(0, MAX_HISTORY_LENGTH)
            };
        });
    }, [canUndo, strokes]);

    // Redo last undone action
    const redo = useCallback(() => {
        if (!canRedo) return;

        setHistory(h => {
            const next = h.future[0];
            const newFuture = h.future.slice(1);

            setStrokes(next);

            return {
                past: [...h.past, strokes].slice(-MAX_HISTORY_LENGTH),
                future: newFuture
            };
        });
    }, [canRedo, strokes]);

    // Clear all history
    const clearHistory = useCallback(() => {
        setHistory({ past: [], future: [] });
    }, []);

    // Delete a stroke (for eraser)
    const deleteStroke = useCallback((strokeIndex) => {
        setStrokes(currentStrokes => {
            const newStrokes = currentStrokes.filter((_, idx) => idx !== strokeIndex);

            // Update history
            setHistory(h => ({
                past: [...h.past, currentStrokes].slice(-MAX_HISTORY_LENGTH),
                future: [] // Clear future when new action is performed
            }));

            return newStrokes;
        });
    }, []);

    return {
        strokes,
        setStrokes: updateStrokes,
        undo,
        redo,
        canUndo,
        canRedo,
        addStroke,
        deleteStroke,
        clearHistory
    };
};
