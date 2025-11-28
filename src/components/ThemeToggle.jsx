import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        // Prefer stored theme, fallback to system preference
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggle = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    return (
        <button
            onClick={toggle}
            className="p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] hover:bg-[var(--accent)] transition-colors"
            aria-label="Toggle light/dark theme"
        >
            {theme === 'light' ? '🌞' : '🌙'}
        </button>
    );
};

export default ThemeToggle;
