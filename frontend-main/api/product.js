// frontend/api/product.js
import axios from 'axios';

// Set the backend server URL
const API_URL = 'http://localhost:5000/api/products'; // Assuming backend is running on port 5000

// Add a new product
export const addProduct = async (productData, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/add`,
      productData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error('Add product error', error);
    throw error.response?.data || error.message;
  }
};

// Get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Get products error', error);
    throw error.response?.data || error.message;
  }
};
