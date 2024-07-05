
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute'; 
import NotFoundPage from './components/NotFoundPage';

import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import CategoryProducts from './pages/CategoryProducts';
import Checkout from './pages/Checkout';
import Login from './pages/Login'; // Import Login

import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';


const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:category" element={<CategoryProducts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/checkout" element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFoundPage />} /> 
          </Routes>
          <Footer />
          <ToastContainer limit={1} />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
