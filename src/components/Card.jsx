import React from 'react';

/**
 * Reusable Card component for content containers.
 * Props:
 *   - children: React node
 *   - className: string (optional, additional CSS classes)
 *   - title: string (optional, card title)
 */
const Card = ({ children, className = '', title }) => {
    return (
        <div className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl shadow-xl p-6 ${className}`}>
            {title && (
                <h3 className="text-lg font-bold text-[var(--text)] mb-4">{title}</h3>
            )}
            {children}
        </div>
    );
};

export default Card;
