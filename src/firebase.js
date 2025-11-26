import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, collection, addDoc, getDoc, doc, query, where, getDocs, orderBy } from "firebase/firestore";
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

export { auth, db, storage };
