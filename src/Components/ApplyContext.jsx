import React, { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';

const ApplyContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access the context

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Hello, this is your theme context example!</h1>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default ApplyContext;
