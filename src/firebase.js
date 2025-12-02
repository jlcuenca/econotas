import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, collection, addDoc, getDoc, doc, query, where, getDocs, orderBy, deleteDoc, updateDoc, onSnapshot, increment, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Replace with your actual Firebase project configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFQEN6wjLDKcUrP4UxVneMA1cNKtvRGY8",
    authDomain: "econotas-app.firebaseapp.com",
    projectId: "econotas-app",
    storageBucket: "econotas-app.firebasestorage.app",
    messagingSenderId: "237857251178",
    appId: "1:237857251178:web:bd4b78051ddf501d714f13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Helper functions

// Sign in anonymously
export const signInUser = async () => {
    try {
        const userCredential = await signInAnonymously(auth);
        return userCredential.user;
    } catch (error) {
        console.error("Error signing in anonymously:", error);
        throw error;
    }
};

// Upload audio blob to Firebase Storage
export const uploadAudio = async (blob, sessionId) => {
    try {
        const storageRef = ref(storage, `audio/${sessionId}.webm`);
        const snapshot = await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    } catch (error) {
        console.error("Error uploading audio:", error);
        throw error;
    }
};

// Save session metadata and strokes to Firestore
export const saveSession = async (sessionData) => {
    try {
        // sessionData should include: userId, sessionName, createdAt, audioUrl, durationMs, strokes
        const docRef = await addDoc(collection(db, "sessions"), sessionData);
        return docRef.id;
    } catch (error) {
        console.error("Error saving session:", error);
        throw error;
    }
};

// Get a single session by ID
export const getSession = async (sessionId) => {
    try {
        const docRef = doc(db, "sessions", sessionId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.log("No such session!");
            return null;
        }
    } catch (error) {
        console.error("Error getting session:", error);
        throw error;
    }
};

// Get all sessions for a specific user
export const getUserSessions = async (userId) => {
    try {
        const q = query(
            collection(db, "sessions"),
            where("userId", "==", userId),
            orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);
        const sessions = [];
        querySnapshot.forEach((doc) => {
            sessions.push({ id: doc.id, ...doc.data() });
        });
        return sessions;
    } catch (error) {
        console.error("Error getting user sessions:", error);
        throw error;
    }
};

// Delete a session (soft delete - only removes Firestore doc, keeps audio for recovery)
export const deleteSession = async (sessionId) => {
    try {
        const docRef = doc(db, "sessions", sessionId);
        await deleteDoc(docRef);
        // Note: Audio file in Storage is retained for recovery
        return true;
    } catch (error) {
        console.error("Error deleting session:", error);
        throw error;
    }
};

// Update session metadata
export const updateSession = async (sessionId, updates) => {
    try {
        const docRef = doc(db, "sessions", sessionId);
        await updateDoc(docRef, updates);
        return true;
    } catch (error) {
        console.error("Error updating session:", error);
        throw error;
    }
};

// ============================================
// COMMENTS MANAGEMENT
// ============================================
// 
// REQUIRED FIRESTORE INDEX:
// To ensure optimal performance for comment queries, create a composite index:
// Collection: comments
// Fields: sessionId (Ascending), timestamp (Ascending)
// 
// This index is required for the queries below that filter by sessionId and order by timestamp.
// Firebase will prompt you to create this index automatically when you first run these queries,
// or you can create it manually in the Firebase Console under Firestore Database > Indexes.
//

// Add a comment to a session
export const addComment = async (commentData) => {
    try {
        // commentData should include: sessionId, userId, userName, userColor, timestamp, text
        const docRef = await addDoc(collection(db, "comments"), {
            ...commentData,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return docRef.id;
    } catch (error) {
        console.error("Error adding comment:", error);
        throw error;
    }
};

// Get all comments for a specific session
export const getSessionComments = async (sessionId) => {
    try {
        const q = query(
            collection(db, "comments"),
            where("sessionId", "==", sessionId),
            orderBy("timestamp", "asc")
        );
        const querySnapshot = await getDocs(q);
        const comments = [];
        querySnapshot.forEach((doc) => {
            comments.push({ id: doc.id, ...doc.data() });
        });
        return comments;
    } catch (error) {
        console.error("Error getting comments:", error);
        throw error;
    }
};

// Update a comment's text
export const updateComment = async (commentId, newText) => {
    try {
        const docRef = doc(db, "comments", commentId);
        await updateDoc(docRef, {
            text: newText,
            updatedAt: new Date()
        });
        return true;
    } catch (error) {
        console.error("Error updating comment:", error);
        throw error;
    }
};

// Delete a comment
export const deleteComment = async (commentId) => {
    try {
        const docRef = doc(db, "comments", commentId);
        await deleteDoc(docRef);
        return true;
    } catch (error) {
        console.error("Error deleting comment:", error);
        throw error;
    }
};

// Subscribe to real-time comment updates for a session
export const subscribeToComments = (sessionId, callback) => {
    try {
        const q = query(
            collection(db, "comments"),
            where("sessionId", "==", sessionId),
            orderBy("timestamp", "asc")
        );

        // Return unsubscribe function
        return onSnapshot(q, (querySnapshot) => {
            const comments = [];
            querySnapshot.forEach((doc) => {
                comments.push({ id: doc.id, ...doc.data() });
            });
            callback(comments);
        }, (error) => {
            console.error("Error in comment subscription:", error);
        });
    } catch (error) {
        console.error("Error setting up comment subscription:", error);
        throw error;
    }
};

// ============================================
// SESSION METRICS (VIEWS & RATINGS)
// ============================================

// Increment view count for a session
export const incrementViewCount = async (sessionId) => {
    try {
        const docRef = doc(db, "sessions", sessionId);
        await updateDoc(docRef, {
            viewCount: increment(1)
        });
        return true;
    } catch (error) {
        console.error("Error incrementing view count:", error);
        // Don't throw error to avoid disrupting user experience
        return false;
    }
};

// Add or update a rating for a session
export const addRating = async (sessionId, userId, rating, comment = "") => {
    try {
        // 1. Create/Update rating document in 'ratings' collection
        // Use composite ID to ensure one rating per user per session
        const ratingId = `${sessionId}_${userId}`;
        const ratingRef = doc(db, "ratings", ratingId);

        await setDoc(ratingRef, {
            sessionId,
            userId,
            rating,
            comment,
            updatedAt: new Date()
        }, { merge: true });

        // 2. Recalculate average rating for the session
        // Note: In a high-traffic app, this should be done via Cloud Functions
        // For this scale, client-side calculation is acceptable

        const q = query(
            collection(db, "ratings"),
            where("sessionId", "==", sessionId)
        );

        const querySnapshot = await getDocs(q);
        let totalRating = 0;
        let count = 0;
        const breakdown = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

        querySnapshot.forEach((doc) => {
            const r = doc.data().rating;
            totalRating += r;
            count++;
            if (breakdown[r] !== undefined) breakdown[r]++;
        });

        const average = count > 0 ? totalRating / count : 0;

        // 3. Update session document with new stats
        const sessionRef = doc(db, "sessions", sessionId);
        await updateDoc(sessionRef, {
            ratingAverage: average,
            ratingCount: count,
            ratingBreakdown: breakdown
        });

        return { average, count };
    } catch (error) {
        console.error("Error adding rating:", error);
        throw error;
    }
};

// Get user's existing rating for a session
export const getUserRating = async (sessionId, userId) => {
    try {
        const ratingId = `${sessionId}_${userId}`;
        const docRef = doc(db, "ratings", ratingId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        }
        return null;
    } catch (error) {
        console.error("Error getting user rating:", error);
        return null;
    }
};

// ==================== TRANSCRIPTION FUNCTIONS ====================

/**
 * Save transcription for a session
 * @param {string} sessionId - Session ID
 * @param {Object} transcription - Transcription object with segments and metadata
 */
export const saveTranscription = async (sessionId, transcription) => {
    try {
        const sessionRef = doc(db, "sessions", sessionId);
        await updateDoc(sessionRef, {
            transcription: {
                segments: transcription.segments || [],
                fullText: transcription.fullText || '',
                language: transcription.language || 'es-ES',
                generatedAt: new Date()
            }
        });
        console.log('✅ Transcription saved successfully');
    } catch (error) {
        console.error("Error saving transcription:", error);
        throw error;
    }
};

/**
 * Get transcription for a session
 * @param {string} sessionId - Session ID
 * @returns {Object|null} Transcription object or null if not found
 */
export const getTranscription = async (sessionId) => {
    try {
        const sessionRef = doc(db, "sessions", sessionId);
        const sessionSnap = await getDoc(sessionRef);

        if (sessionSnap.exists() && sessionSnap.data().transcription) {
            return sessionSnap.data().transcription;
        }
        return null;
    } catch (error) {
        console.error("Error getting transcription:", error);
        throw error;
    }
};

// ==================== FOLDER MANAGEMENT ====================

/**
 * Create a new folder
 * @param {Object} folderData - Folder data (userId, name, color)
 * @returns {string} Folder ID
 */
export const createFolder = async (folderData) => {
    try {
        const docRef = await addDoc(collection(db, "folders"), {
            ...folderData,
            createdAt: new Date(),
            sessionCount: 0
        });
        return docRef.id;
    } catch (error) {
        console.error("Error creating folder:", error);
        throw error;
    }
};

/**
 * Get all folders for a user
 * @param {string} userId - User ID
 * @returns {Array} Array of folder objects
 */
export const getUserFolders = async (userId) => {
    try {
        const q = query(
            collection(db, "folders"),
            where("userId", "==", userId),
            orderBy("createdAt", "asc")
        );
        const querySnapshot = await getDocs(q);
        const folders = [];
        querySnapshot.forEach((doc) => {
            folders.push({ id: doc.id, ...doc.data() });
        });
        return folders;
    } catch (error) {
        console.error("Error getting folders:", error);
        throw error;
    }
};

/**
 * Update folder metadata
 * @param {string} folderId - Folder ID
 * @param {Object} updates - Fields to update
 */
export const updateFolder = async (folderId, updates) => {
    try {
        const docRef = doc(db, "folders", folderId);
        await updateDoc(docRef, updates);
        return true;
    } catch (error) {
        console.error("Error updating folder:", error);
        throw error;
    }
};

/**
 * Delete a folder and move its sessions to "All Sessions" (null folder)
 * @param {string} folderId - Folder ID
 */
export const deleteFolder = async (folderId) => {
    try {
        // First, move all sessions in this folder to null (All Sessions)
        const sessionsQuery = query(
            collection(db, "sessions"),
            where("folderId", "==", folderId)
        );
        const sessionsSnapshot = await getDocs(sessionsQuery);

        // Update all sessions to remove folder association
        const updatePromises = [];
        sessionsSnapshot.forEach((sessionDoc) => {
            updatePromises.push(
                updateDoc(doc(db, "sessions", sessionDoc.id), { folderId: null })
            );
        });
        await Promise.all(updatePromises);

        // Then delete the folder
        await deleteDoc(doc(db, "folders", folderId));
        return true;
    } catch (error) {
        console.error("Error deleting folder:", error);
        throw error;
    }
};

/**
 * Move a session to a folder
 * @param {string} sessionId - Session ID
 * @param {string|null} folderId - Folder ID or null for "All Sessions"
 */
export const moveSessionToFolder = async (sessionId, folderId) => {
    try {
        const docRef = doc(db, "sessions", sessionId);
        await updateDoc(docRef, { folderId: folderId });
        return true;
    } catch (error) {
        console.error("Error moving session to folder:", error);
        throw error;
    }
};

/**
 * Get session count for a folder
 * @param {string} folderId - Folder ID
 * @returns {number} Number of sessions in folder
 */
export const getFolderSessionCount = async (folderId) => {
    try {
        const q = query(
            collection(db, "sessions"),
            where("folderId", "==", folderId)
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.size;
    } catch (error) {
        console.error("Error getting folder session count:", error);
        return 0;
    }
};

// ==================== TAGS & FAVORITES ====================

/**
 * Update session tags
 * @param {string} sessionId - Session ID
 * @param {Array<string>} tags - Array of tag strings
 */
export const updateSessionTags = async (sessionId, tags) => {
    try {
        const docRef = doc(db, "sessions", sessionId);
        await updateDoc(docRef, { tags: tags || [] });
        return true;
    } catch (error) {
        console.error("Error updating session tags:", error);
        throw error;
    }
};

/**
 * Toggle favorite status for a session
 * @param {string} sessionId - Session ID
 * @param {boolean} isFavorite - New favorite status
 */
export const toggleFavorite = async (sessionId, isFavorite) => {
    try {
        const docRef = doc(db, "sessions", sessionId);
        await updateDoc(docRef, { isFavorite: isFavorite });
        return true;
    } catch (error) {
        console.error("Error toggling favorite:", error);
        throw error;
    }
};

/**
 * Get all unique tags from user's sessions
 * @param {string} userId - User ID
 * @returns {Array<{tag: string, count: number}>} Array of tags with usage counts
 */
export const getUserTags = async (userId) => {
    try {
        const q = query(
            collection(db, "sessions"),
            where("userId", "==", userId)
        );
        const querySnapshot = await getDocs(q);

        const tagCounts = {};
        querySnapshot.forEach((doc) => {
            const tags = doc.data().tags || [];
            tags.forEach(tag => {
                tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
        });

        return Object.entries(tagCounts).map(([tag, count]) => ({ tag, count }));
    } catch (error) {
        console.error("Error getting user tags:", error);
        return [];
    }
};

// ==================== BULK OPERATIONS ====================

/**
 * Bulk delete sessions
 * @param {Array<string>} sessionIds - Array of session IDs to delete
 */
export const bulkDeleteSessions = async (sessionIds) => {
    try {
        const deletePromises = sessionIds.map(id => deleteSession(id));
        await Promise.all(deletePromises);
        return true;
    } catch (error) {
        console.error("Error bulk deleting sessions:", error);
        throw error;
    }
};

/**
 * Bulk move sessions to folder
 * @param {Array<string>} sessionIds - Array of session IDs
 * @param {string|null} folderId - Target folder ID or null
 */
export const bulkMoveToFolder = async (sessionIds, folderId) => {
    try {
        const movePromises = sessionIds.map(id => moveSessionToFolder(id, folderId));
        await Promise.all(movePromises);
        return true;
    } catch (error) {
        console.error("Error bulk moving sessions:", error);
        throw error;
    }
};

/**
 * Bulk add tags to sessions
 * @param {Array<string>} sessionIds - Array of session IDs
 * @param {Array<string>} tagsToAdd - Tags to add
 */
export const bulkAddTags = async (sessionIds, tagsToAdd) => {
    try {
        const updatePromises = sessionIds.map(async (id) => {
            const sessionDoc = await getDoc(doc(db, "sessions", id));
            if (sessionDoc.exists()) {
                const currentTags = sessionDoc.data().tags || [];
                const newTags = [...new Set([...currentTags, ...tagsToAdd])]; // Remove duplicates
                await updateSessionTags(id, newTags);
            }
        });
        await Promise.all(updatePromises);
        return true;
    } catch (error) {
        console.error("Error bulk adding tags:", error);
        throw error;
    }
};

export { auth, db, storage };
