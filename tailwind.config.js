/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors with opacity support
        primary: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
        'primary-hover': 'rgb(var(--color-primary-hover-rgb) / <alpha-value>)',
        'primary-active': 'rgb(var(--color-primary-active-rgb) / <alpha-value>)',
        accent: 'rgb(var(--color-accent-rgb) / <alpha-value>)',
        'accent-hover': 'rgb(var(--color-accent-hover-rgb) / <alpha-value>)',
        
        // Semantic UI Colors
        background: 'rgb(var(--color-background-primary-rgb) / <alpha-value>)',
        'background-secondary': 'rgb(var(--color-background-secondary-rgb) / <alpha-value>)',
        'background-tertiary': 'rgb(var(--color-background-tertiary-rgb) / <alpha-value>)',
        surface: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
        'surface-elevated': 'rgb(var(--color-surface-elevated-rgb) / <alpha-value>)',
        
        // Text Colors
        'text-primary': 'rgb(var(--color-text-primary-rgb) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary-rgb) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted-rgb) / <alpha-value>)',
        'text-inverted': 'rgb(var(--color-text-inverted-rgb) / <alpha-value>)',
        
        // State Colors (already have light variants, adding opacity support)
        success: 'rgb(var(--color-success-rgb) / <alpha-value>)',
        error: 'rgb(var(--color-error-rgb) / <alpha-value>)',
        warning: 'rgb(var(--color-warning-rgb) / <alpha-value>)',
        info: 'rgb(var(--color-info-rgb) / <alpha-value>)',
        
        // Border Colors
        border: 'rgb(var(--color-border-primary-rgb) / <alpha-value>)',
        'border-light': 'rgb(var(--color-border-light-rgb) / <alpha-value>)',
        'border-dark': 'rgb(var(--color-border-dark-rgb) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    }
  },
  plugins: [],
};