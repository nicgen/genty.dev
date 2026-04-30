import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="material-symbols-outlined hover:text-primary transition-colors p-2"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? 'dark_mode' : 'light_mode'}
    </button>
  );
};

export default ThemeToggle;
