import React from "react";
import { useNavigate } from "react-router-dom";

import jeansImage from "../../assets/images/jeans.jpg";
import TshirtImage from "../../assets/images/Tshirt.jpg";
import shoesImage from "../../assets/images/shoes.jpg";

const products = [
  {
    id: 1,
    name: "T-shirt",
    description: "Comfortable cotton T-shirt",
    image: TshirtImage,
    category: "Tshirt",
    price: 29.99,
    brand: "Fashion Co.",
    rating: 4.5,
    company: "Fashion Inc.",
  },
  {
    id: 2,
    name: "Jeans",
    description: "Stylish blue jeans",
    image: jeansImage,
    category: "jeans",
    price: 49.99,
    brand: "Denim World",
    rating: 4.7,
    company: "Denim Co.",
  },
  {
    id: 3,
    name: "Sneakers",
    description: "High-quality leather sneakers",
    image: shoesImage,
    category: "shoes",
    price: 79.99,
    brand: "SneakerShop",
    rating: 4.8,
    company: "ShoeMasters",
  },
];

const Product = () => {
  const navigate = useNavigate();

  const handleProductClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => handleProductClick(product.category)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-gray-800 font-bold mb-2">${product.price}</p>
              <p className="text-gray-600">Brand: {product.brand}</p>
              <p className="text-gray-600">Company: {product.company}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">{`Rating: ${product.rating} ⭐`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
