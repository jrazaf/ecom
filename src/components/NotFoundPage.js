import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">La page que vous recherchez n'existe pas.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Retour à la page d'accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;
