// src/App.jsx
import './app.css';
import { Routes, Route } from 'react-router-dom';
import AllCountries from './Pages/AllCountries.jsx';
import CountryInfo from './pages/CountryInfo.jsx';
import { useState, useEffect } from 'react';
import ThemeToggle from './Component/ThemeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <header className="header">
        <div className="container container-header">
          <h5 style={{ display: 'inline' }}>Where in the world</h5>
          <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} />
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route index element={<AllCountries />} />
          <Route path='/country/:countryName' element={<CountryInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;