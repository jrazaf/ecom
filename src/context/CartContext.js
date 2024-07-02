// src/context/CartContext.js
import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.find(product => product.id === action.product.id);
      if (existingProduct) {
        toast.info('Quantité augmentée pour ' + action.product.title);
        return state.map(product =>
          product.id === action.product.id ? { ...product, quantity: product.quantity + 1 } : product
        );
      }
      toast.success('Ajouté au panier: ' + action.product.title);
      return [...state, { ...action.product, quantity: 1 }];
    case 'REMOVE_FROM_CART':
      toast.error('Supprimé du panier: ' + state.find(product => product.id === action.id).title);
      return state.filter(product => product.id !== action.id);
    case 'INCREMENT_QUANTITY':
      toast.info('Quantité augmentée pour ' + state.find(product => product.id === action.id).title);
      return state.map(product =>
        product.id === action.id ? { ...product, quantity: product.quantity + 1 } : product
      );
    case 'DECREMENT_QUANTITY':
      toast.info('Quantité diminuée pour ' + state.find(product => product.id === action.id).title);
      return state.map(product =>
        product.id === action.id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
