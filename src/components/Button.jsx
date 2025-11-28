import React from 'react';

/**
 * Reusable button component with premium styling.
 * Props:
 *   - onClick: function
 *   - disabled: boolean
 *   - variant: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'ghost' (default: 'primary')
 *   - children: React node (icon)
 *   - label: string (optional, for aria-label)
 *   - className: string (optional, additional CSS classes)
 */
const Button = ({ onClick, disabled = false, variant = 'primary', children, label, className = '' }) => {
    const baseClasses = 'flex items-center justify-center p-2 rounded-xl transition-transform duration-200 ease-out font-medium';
    const variantClasses = {
        primary: 'bg-gradient-to-r from-[var(--accent)] to-[#a78bfa] text-white shadow-lg shadow-indigo-500/20',
        secondary: 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg)]',
        danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/20',
        warning: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg shadow-yellow-500/20',
        success: 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/20',
        info: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20',
        ghost: 'text-[var(--text)] hover:bg-[var(--bg-card)]',
    }[variant] || '';

    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95';

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            aria-label={label}
            className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
