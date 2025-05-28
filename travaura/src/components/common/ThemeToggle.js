import React from 'react';
import useTheme from '../../hooks/useTheme';
import '../../styles/themetoggle.css';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-track">
        <div className="toggle-indicator">
          <span className="toggle-icon">
            {darkMode ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;