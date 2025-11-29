import React from 'react';
import { Star } from 'lucide-react';

const RatingStars = ({ rating, max = 5, size = 16, interactive = false, onRate, className = "" }) => {
    const [hoverRating, setHoverRating] = React.useState(0);

    const handleMouseEnter = (index) => {
        if (interactive) {
            setHoverRating(index);
        }
    };

    const handleMouseLeave = () => {
        if (interactive) {
            setHoverRating(0);
        }
    };

    const handleClick = (index) => {
        if (interactive && onRate) {
            onRate(index);
        }
    };

    return (
        <div className={`flex items-center gap-1 ${className}`} onMouseLeave={handleMouseLeave}>
            {[...Array(max)].map((_, i) => {
                const index = i + 1;
                const isFilled = interactive ? index <= (hoverRating || rating) : index <= rating;

                return (
                    <button
                        key={index}
                        type="button"
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'} focus:outline-none`}
                        disabled={!interactive}
                    >
                        <Star
                            size={size}
                            className={`${isFilled
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'fill-transparent text-slate-600'
                                } transition-colors duration-200`}
                        />
                    </button>
                );
            })}
        </div>
    );
};

export default RatingStars;
