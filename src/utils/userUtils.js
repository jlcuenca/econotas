/**
 * User utility functions for generating display names and colors
 * from anonymous user IDs
 */

/**
 * Generate a short display name from userId
 * Example: "gK7mPqAbCdEf..." -> "User 7mPq"
 */
export function generateDisplayName(userId) {
    if (!userId) return 'User';
    const suffix = userId.slice(-4).toUpperCase();
    return `User ${suffix}`;
}

/**
 * Generate a consistent color from userId hash
 * Returns a hex color like "#6366f1"
 */
export function getUserColor(userId) {
    if (!userId) return '#6366f1';

    const colors = [
        '#6366f1', // indigo
        '#ec4899', // pink
        '#14b8a6', // teal
        '#f59e0b', // amber
        '#8b5cf6', // violet
        '#10b981', // emerald
        '#f97316', // orange
        '#06b6d4', // cyan
        '#ef4444', // red
        '#3b82f6', // blue
    ];

    let hash = 0;
    for (let i = 0; i < userId.length; i++) {
        hash = userId.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
}

/**
 * Get user initials from display name
 * "User 7mPq" -> "U7"
 */
export function getUserInitials(displayName) {
    if (!displayName) return 'U';
    const parts = displayName.split(' ');
    if (parts.length >= 2) {
        return parts[0][0] + parts[1][0];
    }
    return displayName.slice(0, 2).toUpperCase();
}

/**
 * Format timestamp in milliseconds to MM:SS
 * @param {number} ms - Timestamp in milliseconds
 * @returns {string} Formatted time string
 */
export function formatTimestamp(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Get relative time string (e.g., "2 hours ago", "just now")
 * @param {Date} date - Date to format
 * @returns {string} Relative time string
 */
export function getRelativeTime(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
}
