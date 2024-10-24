// import React from 'react'
// import DataFetchingComponent from './Components/FetchData'
// import ApplyContext from './Components/ApplyContext'


// export default function App() {
//   return (
//     <>
//       Hello App
//       <ApplyContext/>
//       <DataFetchingComponent/>
//     </>
//   )
// }


// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Login from './Components/auth/Login';
import Dashboard from './Components/Dashboard';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get authentication state

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

