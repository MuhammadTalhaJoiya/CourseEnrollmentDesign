import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

/**
 * ThemeDemo component that showcases the theme system
 * @returns {JSX.Element} ThemeDemo component
 */
const ThemeDemo = () => {
  const { theme, THEMES } = useTheme();
  const isDark = theme === THEMES.DARK;

  return (
    <div className="p-6 theme-transition">
      <div className="flex justify-between items-center mb-6">
        <h2>Theme System Demo</h2>
        <ThemeToggle />
      </div>

      <p className="text-muted mb-6">
        Current theme: <strong>{isDark ? 'Dark' : 'Light'}</strong>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Color Palette */}
        <div className="card p-6">
          <h3 className="mb-4">Color Palette</h3>
          
          <h4 className="text-base font-medium mb-2">Primary Colors</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={`primary-${shade}`} className="flex flex-col items-center">
                <div 
                  className={`w-12 h-12 rounded-md bg-primary-${shade} border border-border-light dark:border-border-dark`}
                  title={`primary-${shade}`}
                ></div>
                <span className="text-xs mt-1">{shade}</span>
              </div>
            ))}
          </div>

          <h4 className="text-base font-medium mb-2">Secondary Colors</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={`secondary-${shade}`} className="flex flex-col items-center">
                <div 
                  className={`w-12 h-12 rounded-md bg-secondary-${shade} border border-border-light dark:border-border-dark`}
                  title={`secondary-${shade}`}
                ></div>
                <span className="text-xs mt-1">{shade}</span>
              </div>
            ))}
          </div>

          <h4 className="text-base font-medium mb-2">Accent Colors</h4>
          <div className="flex flex-wrap gap-2">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={`accent-${shade}`} className="flex flex-col items-center">
                <div 
                  className={`w-12 h-12 rounded-md bg-accent-${shade} border border-border-light dark:border-border-dark`}
                  title={`accent-${shade}`}
                ></div>
                <span className="text-xs mt-1">{shade}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Semantic Colors */}
        <div className="card p-6">
          <h3 className="mb-4">Semantic Colors</h3>
          
          <h4 className="text-base font-medium mb-2">Background & Surface</h4>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="h-16 rounded-md bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark mb-1"></div>
              <span className="text-xs">Background</span>
            </div>
            <div>
              <div className="h-16 rounded-md bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark mb-1"></div>
              <span className="text-xs">Surface</span>
            </div>
            <div>
              <div className="h-16 rounded-md bg-surface-elevated-light dark:bg-surface-elevated-dark border border-border-light dark:border-border-dark mb-1"></div>
              <span className="text-xs">Surface Elevated</span>
            </div>
            <div>
              <div className="h-16 rounded-md border border-border-light dark:border-border-dark mb-1"></div>
              <span className="text-xs">Border</span>
            </div>
          </div>

          <h4 className="text-base font-medium mb-2">Text Colors</h4>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-text-primary-light dark:text-text-primary-dark">Primary Text</p>
            </div>
            <div>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">Secondary Text</p>
            </div>
            <div>
              <p className="text-text-muted-light dark:text-text-muted-dark">Muted Text</p>
            </div>
          </div>

          <h4 className="text-base font-medium mb-2">State Colors</h4>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="h-8 rounded-md bg-state-success mb-1"></div>
              <span className="text-xs">Success</span>
            </div>
            <div>
              <div className="h-8 rounded-md bg-state-error mb-1"></div>
              <span className="text-xs">Error</span>
            </div>
            <div>
              <div className="h-8 rounded-md bg-state-warning mb-1"></div>
              <span className="text-xs">Warning</span>
            </div>
            <div>
              <div className="h-8 rounded-md bg-state-info mb-1"></div>
              <span className="text-xs">Info</span>
            </div>
          </div>
        </div>
      </div>

      {/* Component Examples */}
      <div className="card p-6 mb-8">
        <h3 className="mb-4">Component Examples</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-base font-medium mb-2">Buttons</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <button className="btn-primary">Primary</button>
              <button className="btn-secondary">Secondary</button>
              <button className="btn-outline">Outline</button>
            </div>

            <h4 className="text-base font-medium mb-2">Badges</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="badge-success">Success</span>
              <span className="badge-error">Error</span>
              <span className="badge-warning">Warning</span>
              <span className="badge-info">Info</span>
            </div>
          </div>

          <div>
            <h4 className="text-base font-medium mb-2">Input</h4>
            <input type="text" className="input mb-4" placeholder="Input example" />

            <h4 className="text-base font-medium mb-2">Card Variants</h4>
            <div className="card p-3 mb-2">
              <p className="text-sm">Standard Card</p>
            </div>
            <div className="card-elevated p-3">
              <p className="text-sm">Elevated Card</p>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="card p-6">
        <h3 className="mb-4">Typography</h3>
        
        <div className="space-y-4">
          <div>
            <h1>Heading 1</h1>
            <p className="text-xs text-muted">font-heading text-4xl md:text-5xl</p>
          </div>
          <div>
            <h2>Heading 2</h2>
            <p className="text-xs text-muted">font-heading text-3xl md:text-4xl</p>
          </div>
          <div>
            <h3>Heading 3</h3>
            <p className="text-xs text-muted">font-heading text-2xl md:text-3xl</p>
          </div>
          <div>
            <h4>Heading 4</h4>
            <p className="text-xs text-muted">font-heading text-xl md:text-2xl</p>
          </div>
          <div>
            <h5>Heading 5</h5>
            <p className="text-xs text-muted">font-heading text-lg</p>
          </div>
          <div>
            <h6>Heading 6</h6>
            <p className="text-xs text-muted">font-heading text-base</p>
          </div>
          <div>
            <p>Regular paragraph text using the base font size.</p>
            <p className="text-xs text-muted">font-sans text-base</p>
          </div>
          <div>
            <p className="text-sm">Small text for less emphasis or secondary information.</p>
            <p className="text-xs text-muted">font-sans text-sm</p>
          </div>
          <div>
            <p className="text-xs">Extra small text for captions or fine print.</p>
            <p className="text-xs text-muted">font-sans text-xs</p>
          </div>
          <div>
            <p className="font-mono text-sm">Monospace text for code or technical content.</p>
            <p className="text-xs text-muted">font-mono text-sm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDemo;