
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { auth, setAuth } = useAuth();
  const {cart} = useCart();
  const cartCount = cart.length;

  const handleLogout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
  };

  return (
    <nav className="bg-blue-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">E-Commerce</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/products" className="text-white">Produits</Link>
          <Link to="/categories" className="text-white">Catégories</Link>
          <Link to="/contact" className="text-white">Contact</Link>
          <Link to="/cart" className="text-white">
            <FontAwesomeIcon icon={faShoppingCart} /> Panier ({cartCount})
          </Link>
          {auth ? (
            <button onClick={handleLogout} className="text-white">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          ) : (
            <Link to="/login" className="text-white">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/products" className="block text-white py-2 px-4">Produits</Link>
          <Link to="/categories" className="block text-white py-2 px-4">Catégories</Link>
          <Link to="/contact" className="block text-white py-2 px-4">Contact</Link>
          <Link to="/cart" className="block text-white py-2 px-4">
            <FontAwesomeIcon icon={faShoppingCart} /> Panier ({cartCount})
          </Link>
          {auth ? (
            <button onClick={handleLogout} className="block text-white py-2 px-4">
              <FontAwesomeIcon icon={faSignOutAlt} /> Se déconnecter
            </button>
          ) : (
            <Link to="/login" className="block text-white py-2 px-4">
              <FontAwesomeIcon icon={faUser} /> Se connecter
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
