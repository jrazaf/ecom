// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
      setAuth({ token: response.data.token, user: response.data });
      localStorage.setItem('auth', JSON.stringify({ token: response.data.token, user: response.data }));
      navigate('/');
    } catch (err) {
      setError('Échec de la connexion. Veuillez vérifier vos identifiants.');
    }
  };

  const handleLogout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
    navigate('/login');
  };

  if (auth) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Bienvenue, {auth.user.username}</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 hover:bg-red-700 transition-colors"
        >
          Se déconnecter
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Nom d'utilisateur</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Mot de passe</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 hover:bg-blue-700 transition-colors">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
