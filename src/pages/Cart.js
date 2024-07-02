
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const { cart, dispatch } = useCart();
  const { auth, setAuth } = useAuth();

  const incrementQuantity = (id) => {
    dispatch({ type: 'INCREMENT_QUANTITY', id });
  };

  const decrementQuantity = (id) => {
    dispatch({ type: 'DECREMENT_QUANTITY', id });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };


  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4">
            {cart.map(product => (
              <div key={product.id} className="border p-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h2 className="font-bold">{product.title}</h2>
                  <img  src={product.thumbnail} alt="produit" />
                  <p>{product.price} €</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decrementQuantity(product.id)}
                      className="bg-gray-300 text-black px-2"
                    >
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(product.id)}
                      className="bg-gray-300 text-black px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-500 text-white p-2 ml-4 hover:bg-red-700 transition-colors"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-right mt-4">
            <p className="text-lg font-bold">Total : {totalPrice.toFixed(2)} €</p>
            <Link to="/checkout" className="bg-blue-500 text-white p-2 mt-4 inline-block hover:bg-blue-700 transition-colors">
              Commander
            </Link>
          </div>
        </>
      )}
    </div>
  );
};


export default Cart;
