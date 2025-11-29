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
    const [currentTheme, setCurrentTheme] = useState(() => {
        const savedTheme = localStorage.getItem('econotas-theme');
        return savedTheme && themes[savedTheme] ? savedTheme : 'slate';
    });

    useEffect(() => {
        const theme = themes[currentTheme];
        const root = document.documentElement;

        // Apply CSS variables
        Object.entries(theme.colors).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        localStorage.setItem('econotas-theme', currentTheme);
    }, [currentTheme]);

    const value = {
        currentTheme,
        setTheme: setCurrentTheme,
        themes
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
