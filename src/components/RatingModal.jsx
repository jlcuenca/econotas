import React, { useState } from 'react';
import { X } from 'lucide-react';
import RatingStars from './RatingStars';

const RatingModal = ({ isOpen, onClose, onRate, initialRating = 0, sessionName }) => {
    const [rating, setRating] = useState(initialRating);
    const [comment, setComment] = useState('');
    const [submitting, setSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (rating === 0) return;

        setSubmitting(true);
        try {
            await onRate(rating, comment);
            onClose();
        } catch (error) {
            console.error("Error submitting rating:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-md p-6 shadow-2xl scale-100 animate-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white">Calificar Sesión</h3>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="text-center mb-8">
                    <p className="text-slate-300 mb-4">
                        ¿Qué te pareció <span className="font-semibold text-indigo-400">"{sessionName}"</span>?
                    </p>

                    <div className="flex justify-center mb-2">
                        <RatingStars
                            rating={rating}
                            interactive={true}
                            size={40}
                            onRate={setRating}
                        />
                    </div>
                    <p className="text-sm text-slate-400 h-5">
                        {rating === 1 && "Necesita mejorar"}
                        {rating === 2 && "Regular"}
                        {rating === 3 && "Buena"}
                        {rating === 4 && "Muy buena"}
                        {rating === 5 && "¡Excelente!"}
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-400 mb-2">
                            Comentario (opcional)
                        </label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-24"
                            placeholder="¿Qué fue lo que más te gustó?"
                        />
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={rating === 0 || submitting}
                            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${rating > 0 && !submitting
                                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-900/20'
                                    : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                                }`}
                        >
                            {submitting ? 'Enviando...' : 'Enviar Calificación'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RatingModal;
