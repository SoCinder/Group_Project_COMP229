// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);
  if (!token) {
    // no token → send them to login
    return <Navigate to="/login" replace />;
  }
  // token exists → render the protected children
  return children;
}
