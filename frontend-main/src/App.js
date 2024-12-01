import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";

import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";
import BillPayment from "./components/BillPayment/BillPayment";

import OrderHistory from "./components/OrderHistory/OrderHistory";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ChatBox from "./components/ChatBox/ChatBox";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthProvider } from "./AuthContext";
import Category from "./components/Category/Category";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/bill-payment" element={<BillPayment />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ChatBox />
      </Router>
    </AuthProvider>
  );
}

export default App;
