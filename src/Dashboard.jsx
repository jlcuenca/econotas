import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Play, Share2, Clock, Calendar } from 'lucide-react';
import { signInUser, getUserSessions, auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                loadSessions(currentUser.uid);
            } else {
                try {
                    const newUser = await signInUser();
                    setUser(newUser);
                    // New user won't have sessions, but we're ready
                    setLoading(false);
                } catch (error) {
                    console.error("Auth error:", error);
                    setLoading(false);
                }
            }
        });

        return () => unsubscribe();
    }, []);

    const loadSessions = async (userId) => {
        try {
            const userSessions = await getUserSessions(userId);
            setSessions(userSessions);
        } catch (error) {
            console.error("Error loading sessions:", error);
            if (error.message.includes("index")) {
                alert("Falta un índice en Firestore. Revisa la consola para ver el enlace de creación.");
            }
        } finally {
            setLoading(false);
        }
    };

    const formatDuration = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return '';
        // Handle Firestore Timestamp or ISO string
        <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
        );
    }

return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-6">
        <div className="max-w-4xl mx-auto">
            <header className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-1">Mis Sesiones</h1>
                    <p className="text-slate-400">Gestiona tus grabaciones y notas</p>
                </div>
                <Link
                    to="/new"
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-900/20"
                >
                    <Plus className="w-5 h-5" /> Nueva Sesión
                </Link>
            </header>

            {sessions.length === 0 ? (
                <div className="text-center py-20 bg-slate-800 rounded-2xl border border-slate-700">
                    <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-8 h-8 text-slate-500 ml-1" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No hay sesiones guardadas</h3>
                    <p className="text-slate-400 mb-6">Comienza a grabar tu primera sesión de tutoría.</p>
                    <Link
                        to="/new"
                        className="text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                        Crear una nueva sesión &rarr;
                    </Link>
                </div>
            ) : (
                <div className="grid gap-4">
                    {sessions.map(session => (
                        <Link
                            key={session.id}
                            to={`/share/${session.id}`}
                            className="block bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-xl p-4 transition-all hover:border-indigo-500/50 hover:shadow-lg group"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                        <Play className="w-6 h-6 ml-1" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg group-hover:text-indigo-300 transition-colors">
                                            {session.sessionName || "Sesión sin nombre"}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-slate-400 mt-1">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {formatDate(session.createdAt)}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {formatDuration(session.durationMs)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={(e) => copyShareLink(e, session.id)}
                                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                                    title="Copiar enlace"
                                >
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    </div>
);
};

export default Dashboard;
