/**
 * Exports session data to a JSON file
 * @param {Object} session - The session object containing metadata and strokes
 * @param {Array} comments - Array of comments associated with the session
 */
export const exportSessionToJson = (session, comments = []) => {
    try {
        const exportData = {
            version: "1.0",
            exportedAt: new Date().toISOString(),
            session: {
                id: session.id,
                name: session.sessionName || "Untitled Session",
                createdAt: session.createdAt,
                durationMs: session.durationMs,
                audioUrl: session.audioUrl,
                strokes: typeof session.strokes === 'string' ? JSON.parse(session.strokes) : session.strokes,
                comments: comments
            }
        };

        const jsonString = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        const safeName = (session.sessionName || "session").replace(/[^a-z0-9]/gi, '_').toLowerCase();
        link.download = `econotas_${safeName}_${new Date().toISOString().slice(0, 10)}.json`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        return true;
    } catch (error) {
        console.error("Error exporting session:", error);
        return false;
    }
};
