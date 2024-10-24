// Dashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './features/authSlice';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user); // Get user info from state
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
