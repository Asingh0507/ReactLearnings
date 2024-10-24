import React, { useContext } from 'react';
import useFetch from './useFetch';
import { ThemeContext } from './Context/ThemeContext';

// uses custom hook useFetch to fetch data
const DataFetchingComponent = () => {
  const { data, loading, error } = useFetch('https://dummyjson.com/products');
  const { theme, toggleTheme } = useContext(ThemeContext); // Access the context

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Data:</h1>
      <p> current theme is </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetchingComponent;
