/**
 * Utility functions for exporting transcriptions in different formats
 */

/**
 * Export transcription as plain text
 * @param {Array} segments - Transcription segments
 * @param {string} sessionName - Name of the session
 */
export const exportAsText = (segments, sessionName = 'transcription') => {
    const text = segments
        .map(segment => {
            const time = formatTime(segment.startTime);
            return `[${time}] ${segment.text}`;
        })
        .join('\n\n');

    downloadFile(text, `${sanitizeFilename(sessionName)}_transcription.txt`, 'text/plain');
};

/**
 * Export transcription as SRT (SubRip) format
 * @param {Array} segments - Transcription segments
 * @param {string} sessionName - Name of the session
 */
export const exportAsSRT = (segments, sessionName = 'transcription') => {
    const srt = segments
        .map((segment, index) => {
            const startTime = formatSRTTime(segment.startTime);
            const endTime = formatSRTTime(segment.endTime);

            return `${index + 1}\n${startTime} --> ${endTime}\n${segment.text}\n`;
        })
        .join('\n');

    downloadFile(srt, `${sanitizeFilename(sessionName)}_subtitles.srt`, 'text/plain');
};

/**
 * Export transcription as WebVTT format
 * @param {Array} segments - Transcription segments
 * @param {string} sessionName - Name of the session
 */
export const exportAsVTT = (segments, sessionName = 'transcription') => {
    const vtt = 'WEBVTT\n\n' + segments
        .map((segment, index) => {
            const startTime = formatVTTTime(segment.startTime);
            const endTime = formatVTTTime(segment.endTime);

            return `${index + 1}\n${startTime} --> ${endTime}\n${segment.text}\n`;
        })
        .join('\n');

    downloadFile(vtt, `${sanitizeFilename(sessionName)}_subtitles.vtt`, 'text/vtt');
};

/**
 * Export transcription as JSON
 * @param {Object} transcription - Complete transcription object
 * @param {string} sessionName - Name of the session
 */
export const exportAsJSON = (transcription, sessionName = 'transcription') => {
    const json = JSON.stringify(transcription, null, 2);
    downloadFile(json, `${sanitizeFilename(sessionName)}_transcription.json`, 'application/json');
};

// Helper functions

/**
 * Format milliseconds to MM:SS
 */
const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Format milliseconds to SRT time format (HH:MM:SS,mmm)
 */
const formatSRTTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')},${milliseconds.toString().padStart(3, '0')}`;
};

/**
 * Format milliseconds to WebVTT time format (HH:MM:SS.mmm)
 */
const formatVTTTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
};

/**
 * Sanitize filename by removing invalid characters
 */
const sanitizeFilename = (name) => {
    return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
};

/**
 * Trigger file download in browser
 */
const downloadFile = (content, filename, mimeType) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
};

/**
 * Show export menu and handle selection
 * @param {Array} segments - Transcription segments
 * @param {string} sessionName - Name of the session
 * @param {Function} callback - Optional callback after export
 */
export const showExportMenu = (segments, sessionName, callback) => {
    // This would typically be handled by a modal component
    // For now, we'll export as text by default
    exportAsText(segments, sessionName);
    if (callback) callback();
};
