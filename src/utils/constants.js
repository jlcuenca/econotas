// Application-wide constants

// Recording Configuration
export const MAX_RECORDING_DURATION_MS = 120 * 60 * 1000; // 120 minutes
export const RECORDING_WARNING_THRESHOLD = 0.9; // Show warning at 90% (108 minutes)
export const RECORDING_WARNING_TIME_MS = MAX_RECORDING_DURATION_MS * RECORDING_WARNING_THRESHOLD;

// Storage Configuration
export const RECOMMENDED_STORAGE_GB = 20; // Recommended for professor with 20 students
export const ESTIMATED_SESSION_SIZE_MB = 60; // Average size for 120-min session

// UI Configuration
export const TOAST_DURATION_MS = 3000; // Default notification duration
