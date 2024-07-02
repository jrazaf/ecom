// src/pages/Categories.js
import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../api/dummyjson';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catégories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category}`}
            className="border p-4 text-center transform transition-transform hover:scale-105 bg-blue-100 hover:bg-blue-200"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

