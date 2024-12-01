import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import BlueJeansImage from "../../assets/images/Cetegary/jeans/blue-jeans.jpg";
import WhiteTshirtImage from "../../assets/images/Cetegary/Tshirt/white-Tshirt.jpg";
import BlueShoesImage from "../../assets/images/Cetegary/shoes/blue-shoes.jpg";
import { AuthContext } from "../../AuthContext";

const products = [
  {
    id: 1,
    name: "Blue Jeans",
    image: BlueJeansImage,
    category: "jeans",
    price: 39.99,
  },
  {
    id: 2,
    name: "White T-shirt",
    image: WhiteTshirtImage,
    category: "Tshirt",
    price: 19.99,
  },
  {
    id: 3,
    name: "Blue Shoes",
    image: BlueShoesImage,
    category: "shoes",
    price: 59.99,
  },
];

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const handleAddToCart = (product) => {
    if (!authState.user) {
      navigate("/login");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProduct = cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} added to cart`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center capitalize">
        {category} Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-800 font-bold mb-2">${product.price}</p>
                <button
                  className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-center col-span-3">
            No products available in this category.
          </h2>
        )}
      </div>
    </div>
  );
};

export default Category;
