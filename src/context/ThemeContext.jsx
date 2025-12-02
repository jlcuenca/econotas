import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../utils/themes';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    // Separate state for mode (dark/light) and theme (slate/ocean/etc)
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('econotas-mode');
        return savedMode || 'dark';
    });

    const [currentTheme, setCurrentTheme] = useState(() => {
        const savedTheme = localStorage.getItem('econotas-theme');
        return savedTheme && themes[savedTheme] ? savedTheme : 'slate';
    });

    // Get the actual theme to apply based on mode
    const getActiveTheme = () => {
        if (mode === 'light') {
            return 'light';
        }
        // In dark mode, use the selected theme (but not light)
        return currentTheme === 'light' ? 'slate' : currentTheme;
    };

    useEffect(() => {
        const activeThemeKey = getActiveTheme();
        const theme = themes[activeThemeKey];
        const root = document.documentElement;

        // Apply CSS variables
        Object.entries(theme.colors).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        // Save preferences
        localStorage.setItem('econotas-mode', mode);
        localStorage.setItem('econotas-theme', currentTheme);
    }, [currentTheme, mode]);

    const toggleMode = () => {
        setMode(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const value = {
        mode,
        currentTheme,
        activeTheme: getActiveTheme(),
        setTheme: setCurrentTheme,
        toggleMode,
        themes
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
