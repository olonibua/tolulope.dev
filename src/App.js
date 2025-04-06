import React, { useState, useEffect } from 'react';
import "./App.css";
import HomePage from "./component/HomePage";
import { motion } from 'framer-motion';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add debugging for clicks
    const handleClick = (e) => {
      console.log('Click detected at:', e.clientX, e.clientY);
      console.log('Target:', e.target);
    }
    
    window.addEventListener('click', handleClick);

    // Handle cursor movement
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-dark' : 'bg-light'} flex items-center justify-center`}>
        <div className="text-center">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          <p className="mt-4 text-lg font-medium text-primary">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${theme === 'dark' ? 'dark' : ''}`}>
      <div 
        className="pointer-events-none fixed inset-0 z-30 opacity-70 transition duration-300 ease-in-out"
        style={{
          background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, ${theme === 'dark' ? 'rgba(0, 180, 216, 0.15)' : 'rgba(0, 119, 182, 0.15)'}, transparent 80%)`,
        }}
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HomePage theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
