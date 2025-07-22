import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for theme management
const ThemeContext = createContext();

// Theme options
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

/**
 * ThemeProvider component that manages theme state and provides theme switching functionality
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export function ThemeProvider({ children }) {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEMES.DARK;
    }
    
    // Default to light theme
    return THEMES.LIGHT;
  });

  // Update theme in localStorage and apply to document when theme changes
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Apply theme to document
    const root = document.documentElement;
    if (theme === THEMES.DARK) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  // Set a specific theme
  const setThemeMode = (mode) => {
    if (Object.values(THEMES).includes(mode)) {
      setTheme(mode);
    } else {
      console.error(`Invalid theme mode: ${mode}. Use one of: ${Object.values(THEMES).join(', ')}`);
    }
  };

  // Context value
  const value = {
    theme,
    isDarkMode: theme === THEMES.DARK,
    isLightMode: theme === THEMES.LIGHT,
    toggleTheme,
    setTheme: setThemeMode,
    THEMES,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to use the theme context
 * @returns {Object} Theme context value
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeContext;