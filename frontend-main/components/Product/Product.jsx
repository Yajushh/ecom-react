// frontend/components/Product/Product.jsx
import React, { useState, useEffect } from 'react';
import { getProducts } from '../../api/product';  // Import the API function

function Product() {
  const [products, setProducts] = useState([]);  // State to store the product data
  const [error, setError] = useState('');        // State to handle any errors

  useEffect(() => {
    // Fetch products when the component mounts
    const fetchProducts = async () => {
      try {
        const data = await getProducts();  // Make the API call
        setProducts(data);  // Store the fetched data in the state
      } catch (err) {
        setError('Failed to load products');  // Handle errors
      }
    };

    fetchProducts();
  }, []);  // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <h2>Products</h2>
      {error && <p>{error}</p>} {/* Display any error if occurred */}
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default Product;
