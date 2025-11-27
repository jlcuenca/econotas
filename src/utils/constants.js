// Color palette configuration
export const COLOR_PALETTE = [
    { name: 'Rojo', value: '#ef4444', hex: '#ef4444' },
    { name: 'Azul', value: '#3b82f6', hex: '#3b82f6' },
    { name: 'Verde', value: '#10b981', hex: '#10b981' },
    { name: 'Amarillo', value: '#eab308', hex: '#eab308' },
    { name: 'Negro', value: '#000000', hex: '#000000' },
    { name: 'Blanco', value: '#ffffff', hex: '#ffffff' },
    { name: 'Naranja', value: '#f97316', hex: '#f97316' },
    { name: 'Morado', value: '#a855f7', hex: '#a855f7' }
];

// Drawing tool settings
export const MIN_THICKNESS = 1;
export const MAX_THICKNESS = 20;
export const DEFAULT_THICKNESS = 4;
export const DEFAULT_COLOR = '#e2e8f0'; // Light slate (existing default)

// Zoom settings
export const MIN_ZOOM = 0.5;
export const MAX_ZOOM = 5;
export const DEFAULT_ZOOM = 1;
export const ZOOM_STEP = 0.2;

// Undo/Redo settings
export const MAX_HISTORY_LENGTH = 50;

// Recording limits (from Phase 0)
export const MAX_RECORDING_DURATION_MS = 120 * 60 * 1000; // 120 minutes
export const RECORDING_WARNING_TIME_MS = MAX_RECORDING_DURATION_MS * 0.9; // 90%
export const RECOMMENDED_STORAGE_GB = 20;
export const ESTIMATED_SESSION_SIZE_MB = 60;
