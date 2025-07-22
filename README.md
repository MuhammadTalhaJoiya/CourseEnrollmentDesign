# Course Platform - Dynamic Theming Architecture

## Overview

This project implements a comprehensive dynamic theming architecture for a scalable course platform frontend. The theming system centralizes all design tokens (colors, fonts, spacing, etc.) and provides seamless light/dark mode switching.

## Theming Architecture

### Core Components

1. **Centralized Configuration**
   - All design tokens are defined in `tailwind.config.js`
   - Semantic naming conventions are used throughout
   - Light and dark mode variants are defined for all relevant tokens

2. **Theme Context**
   - `ThemeContext.jsx` provides theme state management
   - Detects and respects user's system preferences
   - Persists theme selection in localStorage
   - Provides convenient hooks and utilities for theme manipulation

3. **CSS Variables**
   - Design tokens are exposed as CSS variables in `index.css`
   - Variables follow semantic naming conventions (e.g., `--color-primary`, `--color-background`)
   - Dark mode variables are applied via the `.dark` class

4. **Component Styling**
   - Reusable component classes in `index.css`
   - Components automatically adapt to theme changes
   - Consistent transition effects for smooth theme switching

## Color System

### Brand Colors
- **Primary**: Blue scale (50-900)
- **Secondary**: Purple scale (50-900)
- **Accent**: Orange scale (50-900)

### Semantic Colors
- **Background**: Light/dark variants
- **Surface**: Light/dark variants with elevated options
- **Text**: Primary, secondary, and muted variants for both light/dark modes
- **Border**: Light/dark variants
- **State**: Success, error, warning, and info

## Typography System

- **Font Families**:
  - Sans: Plus Jakarta Sans (body text)
  - Heading: Outfit (headings)
  - Mono: JetBrains Mono (code)

- **Font Sizes**: Comprehensive scale from xs to 5xl with appropriate line heights

## Usage

### Switching Themes

```jsx
// Using the ThemeToggle component
import ThemeToggle from './components/ThemeToggle';

// In your component
<ThemeToggle />

// Using the useTheme hook directly
import { useTheme } from './contexts/ThemeContext';

function MyComponent() {
  const { toggleTheme, setTheme, theme, THEMES } = useTheme();
  
  // Toggle between light and dark
  const handleToggle = () => toggleTheme();
  
  // Set specific theme
  const setLightTheme = () => setTheme(THEMES.LIGHT);
  const setDarkTheme = () => setTheme(THEMES.DARK);
  
  // Check current theme
  const isDarkMode = theme === THEMES.DARK;
  
  return (
    // Your component JSX
  );
}
```

### Using Theme Classes

```jsx
// Components automatically adapt to the current theme
<div className="card">Card with automatic theme support</div>

// Text with semantic color classes
<p className="text-muted">Muted text that works in both themes</p>

// Explicit light/dark mode styling
<div className="bg-surface-light dark:bg-surface-dark">
  Explicitly styled element
</div>
```

## Extending the Theme

To extend or modify the theme:

1. Update design tokens in `tailwind.config.js`
2. Add corresponding CSS variables in `index.css` if needed
3. Create new component classes in `index.css` as required

## Best Practices

1. Always use semantic color names instead of literal color values
2. Use the provided component classes when possible
3. Add the `theme-transition` class to elements that should animate during theme changes
4. Test all components in both light and dark modes
5. Use the `useTheme` hook to access theme information in components