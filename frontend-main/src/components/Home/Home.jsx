import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="relative bg-gray-800">
        <img
          src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-jmendezrf-1536619.jpg&fm=jpg"
          alt="Boutique Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to <span className="text-yellow-400">Boutique</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 text-center max-w-2xl">
            Discover the latest trends in fashion and style. Shop our new
            collection now.
          </p>
          <Link
            to="/products"
            className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <img
                src="https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?s=612x612&w=0&k=20&c=L725fuzFTnm6qEaqE7Urc5q6IR80EgYQEjBn_qtBIQg="
                alt="Product Name"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-800 font-bold mb-2">$99.99</p>
                <Link
                  to="/product/1"
                  className="block text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Product Name"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-800 font-bold mb-2">$299.99</p>
                <Link
                  to="/product/1"
                  className="block text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <img
                src="https://mma.prnewswire.com/media/2339307/TRN_50feature_03_en.jpg"
                alt="Product Name"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-800 font-bold mb-2">$89.99</p>
                <Link
                  to="/product/1"
                  className="block text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
            {/* Repeat for other products */}
            {/* ... */}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Boutique?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-800 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 8V12L14 14"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                We offer the best quality products that meet your expectations.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-800 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 3L21 21"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9L15 15"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Enjoy free shipping on all orders over $50.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-800 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 8V12L14 14"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our support team is here to help you anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Boutique. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
