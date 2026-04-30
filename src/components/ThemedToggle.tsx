import React, { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const ThemedToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button 
      onClick={toggleTheme}
      className="material-symbols-outlined w-5 h-5 hover:text-primary transition-colors p-2"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? 'dark_mode' : 'light_mode'}
    </button>
  );
};

export default ThemedToggle;
