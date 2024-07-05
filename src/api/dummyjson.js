// src/api/dummyjson.js
const API_URL = 'https://dummyjson.com';

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();
  return data.products;
};

export const fetchLastProducts = async () => {
  const response = await fetch(`${API_URL}/products?limit=6&sort=-createdAt'`);
  const data = await response.json();
  return data.products;
};

export const fetchCategories = async () => {
  const response = await fetch(`${API_URL}/products/category-list`);
  const data = await response.json();
  return data;
};

export const fetchProduct = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
};

export const fetchProductsByCategory = async (category) => {
  const response = await fetch(`https://dummyjson.com/products/category/${category}`);
  const data = await response.json();
  return data.products;
};
