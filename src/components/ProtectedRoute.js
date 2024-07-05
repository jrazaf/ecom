// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();

  if (!auth) {
    alert('Pour commander un produit, il faut se connecter');
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
