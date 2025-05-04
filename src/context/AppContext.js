'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load settings from localStorage on first render
  useEffect(() => {
    const savedLogin = localStorage.getItem('isLoggedIn');
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedLogin === 'true') setIsLoggedIn(true);
    if (savedDarkMode === 'true') setDarkMode(true);
  }, []);

  // Update dark mode class on body
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Save login status when it changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AppContext.Provider value={{ isLoggedIn, login, logout, darkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
