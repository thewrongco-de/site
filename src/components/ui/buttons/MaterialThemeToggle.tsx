'use client';
import React, { useState, useEffect } from 'react';
import '@material/web/button/text-button.js';
import { MaterialLightModeIcon, MaterialDarkModeIcon } from '../icons';

// Define the Material Web component type
interface MaterialTextButtonProps extends React.HTMLAttributes<HTMLElement> {
  disabled?: boolean;
  'has-icon'?: boolean;
  href?: string;
  target?: string;
  type?: 'submit' | 'reset' | 'button';
  name?: string;
  value?: string;
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'md-text-button': MaterialTextButtonProps;
    }
  }
}

export default function MaterialThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // No saved preference, follow system settings
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDark ? 'dark' : 'light';
      setTheme(systemTheme);
      // Remove any existing data-theme to let CSS handle system preference
      document.documentElement.removeAttribute('data-theme');
    }
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) {
    return <div className="w-10 h-6" />; // Placeholder space
  }

  // Show the icon for what the button will switch TO
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <md-text-button
      className="theme-toggle-button"
      onClick={toggleTheme}
      has-icon
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      style={{
        '--md-text-button-container-height': '40px',
        '--md-text-button-icon-size': '20px',
        '--md-text-button-with-icon-spacing': '8px',
      } as React.CSSProperties}
    >
      {theme === 'light' ? (
        <MaterialDarkModeIcon size={20} />
      ) : (
        <MaterialLightModeIcon size={20} />
      )}
    </md-text-button>
  );
}