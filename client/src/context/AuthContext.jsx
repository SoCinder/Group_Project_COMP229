// client/src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the auth context with default values
export const AuthContext = createContext({
  token: null,
  user:  null,
  login: () => {},
  logout: () => {}
});

// AuthProvider wraps your app and provides auth state
export function AuthProvider({ children }) {
  // Load token and user from localStorage initially
  const [token, setToken] = useState(() => localStorage.getItem('authToken'));
  const [user, setUser]   = useState(() => {
    const stored = localStorage.getItem('authUser');
    return stored ? JSON.parse(stored) : null;
  });

  // Whenever token changes, update axios default header and persist
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('authToken', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('authToken');
    }
  }, [token]);

  // Whenever user changes, persist to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('authUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('authUser');
    }
  }, [user]);

  // Call this on login to set token and user
  const login = ({ token, user }) => {
    setToken(token);
    if (user) {
      setUser(user);
    }
  };

  // Call this on logout to clear auth state
  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}