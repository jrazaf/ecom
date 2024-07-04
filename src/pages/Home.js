// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/dummyjson';
import { useCart } from '../context/CartContext';
import imgecommerce from '../images/ecommerce.jpg';

const Home = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=6&sort=-createdAt');
        const data = await response.json();
        setLatestProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="banner mb-8">
        <img
          src={imgecommerce}
          alt="Banner"
          className="w-full h-auto"
        />
      </div>
      <h1 className="text-2xl font-bold mb-4">Derniers Produits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {latestProducts.map(product => (
          <div key={product.id} className="border p-4 transform transition-transform hover:scale-105">
            <h2 className="font-bold">{product.title}</h2>
            <img  src={product.thumbnail} alt="produit" />
            <p>{product.description}</p>
            <p className="text-right font-bold">{product.price} €</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white p-2 mt-2 hover:bg-blue-700 transition-colors"
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
