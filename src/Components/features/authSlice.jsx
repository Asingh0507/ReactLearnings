// features/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

// Async thunk for login
export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await fakeApiCall(credentials); // Simulate API call
  return response.user; // Return user data on success
});

// Create a slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = 'Invalid credentials';
      });
  },
});

// Export actions and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;

// Simulated API call function
const fakeApiCall = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.username === 'user' && credentials.password === 'password') {
        resolve({ user: { username: 'user' } });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};
