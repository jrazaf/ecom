// src/pages/CategoryProducts.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategory } from '../api/dummyjson';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(25);
  const { dispatch } = useCart();

  useEffect(() => {
    fetchProductsByCategory(category).then(setProducts);
  }, [category]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Produits de la catégorie: {category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map(product => (
          <div key={product.id} className="border p-4 transform transition-transform hover:scale-105 flex flex-col justify-between">
            <div>
              <h2 className="font-bold">{product.title}</h2>
              <img  src={product.thumbnail} alt="produit" />
              <p>{product.description}</p>
              <p className="text-right font-bold">{product.price} €</p>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white p-2 hover:bg-blue-700 transition-colors"
              >
                Ajouter au panier
              </button>
              <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline ml-auto">
                Voir détails
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="flex justify-center">
        {pageNumbers.map(number => (
          <li key={number} className="mx-1">
            <button
              onClick={() => paginate(number)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryProducts;
