import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (savedCart.length === 0) {
      navigate("/cart");
    } else {
      setCart(savedCart);
    }
  }, [navigate]);

  const handleOrderConfirmation = () => {
    const orderDetails = {
      orderId: Math.floor(Math.random() * 1000000),
      products: cart,
      totalAmount: cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
      date: new Date().toLocaleString(),
      status: "Paid",
    };

    const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
    orderHistory.push(orderDetails);
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));

    localStorage.removeItem("cart");
    setCart([]);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
        <p>
          Thank you for your purchase. Your order ID is #
          {Math.floor(Math.random() * 1000000)}.
        </p>
        <button
          className="mt-6 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Order</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center mb-4 bg-white p-4 rounded-lg shadow-md"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-lg mr-4"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">
              ${item.price} x {item.quantity} = $
              {(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
      <div className="text-right font-bold text-xl mt-4">
        Total Amount: $
        {cart
          .reduce((acc, item) => acc + item.price * item.quantity, 0)
          .toFixed(2)}
      </div>
      <div className="text-center mt-6">
        <button
          className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
          onClick={handleOrderConfirmation}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Order;
