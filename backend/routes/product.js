// backend/routes/product.js

const express = require('express');
const Product = require('../models/Product');  // Import the Product model

const router = express.Router();

// Route to create a new product
router.post('/add', async (req, res) => {
  const { name, description, price, stock, category } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      category,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
