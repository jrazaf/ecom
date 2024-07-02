// src/pages/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../api/dummyjson';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    fetchProduct(id).then(setProduct);
  }, [id]);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p>{product.description}</p>
      <p className="text-right font-bold">{product.price} €</p>
      <div className="my-4">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index}`} className="w-full h-auto mb-2" />
        ))}
      </div>
      <button
        onClick={addToCart}
        className="bg-blue-500 text-white p-2 mt-2 hover:bg-blue-700 transition-colors"
      >
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductDetail;
