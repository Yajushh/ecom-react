import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";

const Navbar = () => {
  const { authState, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <div>
            <Link to="/" className="text-3xl font-bold text-gray-800">
              Boutique
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 hover:underline  transition"
              >
                Home
              </Link>
              <Link
                to="/product"
                className="text-gray-700 hover:text-gray-900 hover:underline transition"
              >
                Product
              </Link>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-gray-900 hover:underline transition"
              >
                Cart
              </Link>
              <Link
                to="/order"
                className="text-gray-700 hover:text-gray-900 hover:underline transition"
              >
                Order
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 hover:underline transition"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 hover:underline transition"
              >
                Contact
              </Link>
              <Link
                to="/order-history"
                className="text-gray-700 hover:text-gray-900 hover:underline transition"
              >
                Order History
              </Link>
            </div>
            {authState.user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">
                  Hello, {authState.user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
