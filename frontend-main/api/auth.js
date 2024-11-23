// frontend/api/auth.js
import axios from 'axios';

// Set the backend server URL (Adjust based on your setup)
const API_URL = 'http://localhost:5000/api/auth'; // Assuming backend is running on port 5000

// Register a new user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Registration error', error);
    throw error.response?.data || error.message;
  }
};

// Login user
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Login error', error);
    throw error.response?.data || error.message;
  }
};
