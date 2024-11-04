// src/Component/ThemeToggle.jsx
import React from 'react';

const ThemeToggle = ({ toggleTheme, darkMode }) => {
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {darkMode ? (
        <>
          <i className="bi bi-sun"></i> Light Mode
        </>
      ) : (
        <>
          <i className="bi bi-moon"></i> Dark Mode
        </>
      )}
    </button>
  );
};

export default ThemeToggle;