# Theme System Documentation

## Introduction

This document provides detailed information about the theming system implemented in our course platform. The system is designed to be scalable, maintainable, and easy to extend, with built-in support for light and dark modes.

## Architecture Overview

Our theming architecture follows these key principles:

1. **Centralization**: All design tokens are defined in a single location
2. **Semantic Naming**: Variables use descriptive names rather than literal values
3. **Automatic Updates**: Changes to the theme configuration propagate throughout the application
4. **Mode Support**: Built-in light and dark mode with easy switching

## Implementation Details

### 1. Tailwind Configuration

The `tailwind.config.js` file serves as the single source of truth for all design tokens. It defines:

- Color palettes with semantic naming
- Typography settings (font families, sizes, line heights)
- Spacing values
- Border radius options
- Box shadows
- Animation properties

All colors have light and dark mode variants where appropriate.

### 2. CSS Variables

The design tokens from Tailwind are exposed as CSS variables in `index.css`. This provides:

- A bridge between Tailwind's configuration and custom CSS
- Easy access to theme values in JavaScript if needed
- Clear documentation of available theme values

Variables follow a consistent naming pattern:

- `--color-[category]-[variant]`
- `--shadow-[size]`
- `--animation-[property]`

### 3. Theme Context

The `ThemeContext.jsx` file provides React components with access to the current theme and methods to change it:

- `ThemeProvider`: Context provider that manages theme state
- `useTheme()`: Custom hook for accessing theme information
- Theme persistence in localStorage
- System preference detection

### 4. Component Classes

Reusable component classes in `index.css` leverage the theme system:

- `.btn`, `.btn-primary`, `.btn-secondary`, etc.
- `.card`, `.card-elevated`
- `.input`
- `.badge` variants
- `.text-muted`

These classes automatically adapt to the current theme.

## Using the Theme System

### In Components

```jsx
// Import the theme hook
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  // Access theme information
  const { theme, isDarkMode, toggleTheme } = useTheme();
  
  return (
    <div>
      <p className="text-muted">Current theme: {theme}</p>
      <button onClick={toggleTheme} className="btn-primary">
        Toggle Theme
      </button>
    </div>
  );
}
```

### In Tailwind Classes

```jsx
// Using semantic color classes
<div className="bg-surface-light dark:bg-surface-dark">
  <h2 className="text-text-primary-light dark:text-text-primary-dark">
    This text adapts to the theme
  </h2>
</div>

// Using component classes that automatically adapt
<div className="card">
  <h3>Card Title</h3>
  <p className="text-muted">This card adapts to the current theme</p>
  <button className="btn-primary">Action</button>
</div>
```

### Adding Theme Transitions

Add the `theme-transition` class to elements that should animate during theme changes:

```jsx
<div className="card theme-transition">
  Content that smoothly transitions between themes
</div>
```

## Extending the Theme

### Adding New Colors

1. Add the color to `tailwind.config.js`:

```js
// In tailwind.config.js
colors: {
  // Existing colors...
  tertiary: {
    50: '#F0FDF4',
    // ... other shades
    500: '#10B981',  // Default tertiary
    // ... other shades
    900: '#064E3B',
  },
}
```

2. Add CSS variables in `index.css`:

```css
/* In index.css */
:root {
  /* Existing variables... */
  --color-tertiary-50: theme('colors.tertiary.50');
  /* ... other shades */
  --color-tertiary-500: theme('colors.tertiary.500');
  /* ... other shades */
  --color-tertiary-900: theme('colors.tertiary.900');
}
```

3. Create component classes if needed:

```css
/* In index.css */
.btn-tertiary {
  @apply btn bg-tertiary-500 text-white hover:bg-tertiary-600 active:bg-tertiary-700 
         shadow-sm hover:shadow-md hover:shadow-tertiary-500/20 active:shadow-sm
         active:transform active:scale-[0.98];
}
```

### Adding New Component Styles

Add new component classes to `index.css`:

```css
/* In index.css */
.alert {
  @apply p-4 rounded-lg border theme-transition;
}

.alert-info {
  @apply alert bg-state-info/10 border-state-info/20 text-text-primary-light dark:text-text-primary-dark;
}

/* Add more alert variants as needed */
```

## Best Practices

1. **Use Semantic Names**: Always use semantic color names (e.g., `primary-500`, `text-muted`) instead of literal color values (`#3B82F6`, `#64748B`).

2. **Leverage Component Classes**: Use the provided component classes when possible to ensure consistent styling and automatic theme adaptation.

3. **Test Both Themes**: Always test components in both light and dark modes to ensure they look good in both contexts.

4. **Add Transitions**: Add the `theme-transition` class to elements that should animate during theme changes for a smoother user experience.

5. **Follow Naming Conventions**: When extending the theme, follow the established naming conventions for consistency.

6. **Document Extensions**: When adding new theme elements, update this documentation to reflect the changes.

## Troubleshooting

### Theme Not Changing

- Ensure the component is wrapped in a `ThemeProvider`
- Check that dark mode classes are properly applied (e.g., `dark:bg-surface-dark`)
- Verify that localStorage is accessible (not in an incognito window with strict settings)

### Inconsistent Styling

- Make sure you're using the semantic color names consistently
- Check for hardcoded color values that should be replaced with theme variables
- Ensure the component has the appropriate dark mode variants for all styles