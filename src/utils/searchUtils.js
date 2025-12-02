/**
 * Search utility functions for EcoNotas
 * Provides client-side search across sessions, comments, and transcriptions
 */

/**
 * Search sessions based on query and scope
 * @param {string} query - Search query
 * @param {Array} sessions - Array of session objects
 * @param {string} scope - Search scope: 'names', 'comments', 'transcriptions', 'all'
 * @param {Array} allComments - Array of all comments (optional, for comment search)
 * @returns {Array} Filtered sessions with match information
 */
export const searchSessions = (query, sessions, scope = 'all', allComments = []) => {
    if (!query || !query.trim()) return sessions;

    const searchTerm = query.toLowerCase().trim();
    const results = [];

    sessions.forEach(session => {
        let matches = [];
        let matchFound = false;

        // Search in session names
        if (scope === 'names' || scope === 'all') {
            if (session.sessionName.toLowerCase().includes(searchTerm)) {
                matches.push({ type: 'name', text: session.sessionName });
                matchFound = true;
            }
        }

        // Search in tags
        if (scope === 'all') {
            const sessionTags = session.tags || [];
            sessionTags.forEach(tag => {
                if (tag.toLowerCase().includes(searchTerm)) {
                    matches.push({ type: 'tag', text: tag });
                    matchFound = true;
                }
            });
        }

        // Search in comments
        if (scope === 'comments' || scope === 'all') {
            const sessionComments = allComments.filter(c => c.sessionId === session.id);
            sessionComments.forEach(comment => {
                if (comment.text.toLowerCase().includes(searchTerm)) {
                    matches.push({
                        type: 'comment',
                        text: comment.text,
                        timestamp: comment.timestamp
                    });
                    matchFound = true;
                }
            });
        }

        // Search in transcriptions
        if (scope === 'transcriptions' || scope === 'all') {
            if (session.transcription?.fullText) {
                if (session.transcription.fullText.toLowerCase().includes(searchTerm)) {
                    matches.push({ type: 'transcription', text: session.transcription.fullText });
                    matchFound = true;
                }
            }
        }

        if (matchFound) {
            results.push({ ...session, searchMatches: matches });
        }
    });

    return results;
};

/**
 * Highlight search matches in text
 * @param {string} text - Text to highlight
 * @param {string} query - Search query
 * @returns {string} HTML string with highlighted matches
 */
export const highlightMatches = (text, query) => {
    if (!query || !text) return text;

    const searchTerm = query.trim();
    const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-300 text-slate-900 px-0.5 rounded">$1</mark>');
};

/**
 * Escape special regex characters
 * @param {string} string - String to escape
 * @returns {string} Escaped string
 */
const escapeRegex = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

/**
 * Save recent search to localStorage
 * @param {string} query - Search query to save
 * @param {number} maxRecent - Maximum number of recent searches to keep
 */
export const saveRecentSearch = (query, maxRecent = 10) => {
    if (!query || !query.trim()) return;

    try {
        const recent = getRecentSearches();
        const trimmedQuery = query.trim();

        // Remove if already exists
        const filtered = recent.filter(q => q !== trimmedQuery);

        // Add to beginning
        filtered.unshift(trimmedQuery);

        // Keep only maxRecent items
        const updated = filtered.slice(0, maxRecent);

        localStorage.setItem('econotas-recent-searches', JSON.stringify(updated));
    } catch (error) {
        console.error('Error saving recent search:', error);
    }
};

/**
 * Get recent searches from localStorage
 * @returns {Array<string>} Array of recent search queries
 */
export const getRecentSearches = () => {
    try {
        const stored = localStorage.getItem('econotas-recent-searches');
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Error getting recent searches:', error);
        return [];
    }
};

/**
 * Clear recent searches
 */
export const clearRecentSearches = () => {
    try {
        localStorage.removeItem('econotas-recent-searches');
    } catch (error) {
        console.error('Error clearing recent searches:', error);
    }
};

/**
 * Get all unique tags from sessions
 * @param {Array} sessions - Array of session objects
 * @returns {Array<{tag: string, count: number}>} Array of tags with counts
 */
export const extractTagsFromSessions = (sessions) => {
    const tagCounts = {};

    sessions.forEach(session => {
        const tags = session.tags || [];
        tags.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    });

    return Object.entries(tagCounts)
        .map(([tag, count]) => ({ tag, count }))
        .sort((a, b) => b.count - a.count); // Sort by count descending
};

/**
 * Filter sessions by multiple criteria
 * @param {Array} sessions - Array of session objects
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered sessions
 */
export const filterSessions = (sessions, filters) => {
    let filtered = [...sessions];

    // Filter by folder
    if (filters.folderId !== undefined) {
        if (filters.folderId === 'favorites') {
            filtered = filtered.filter(s => s.isFavorite === true);
        } else if (filters.folderId === null) {
            // "All Sessions" - no folder filter
        } else {
            filtered = filtered.filter(s => s.folderId === filters.folderId);
        }
    }

    // Filter by tags
    if (filters.tags && filters.tags.length > 0) {
        filtered = filtered.filter(session => {
            const sessionTags = session.tags || [];
            return filters.tags.some(tag => sessionTags.includes(tag));
        });
    }

    // Filter by favorite
    if (filters.favoritesOnly) {
        filtered = filtered.filter(s => s.isFavorite === true);
    }

    return filtered;
};
