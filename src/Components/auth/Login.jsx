import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../features/authSlice'
import { login } from '../features/authSlice'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = useSelector((state) => state.auth); // Access authentication state
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error); // Get authentication error from state
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials)); 
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('/dashboard'); // Redirect to the dashboard route
    }
  }, [auth.isAuthenticated, navigate]);

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {authError && <p style={{ color: 'red' }}>{authError}</p>} 
    </div>
  );
};

export default Login;
