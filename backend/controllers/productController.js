const Product = require('../models/Product'); // Import the Product model

// GET all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from MongoDB
    res.json(products); // Return the products as a JSON response
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Fetch product by ID
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product); // Return the product as a JSON response
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// POST (Create) a new product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body); // Create a new Product instance from the request body
    await newProduct.save(); // Save it to the database
    res.status(201).json(newProduct); // Return the created product as a JSON response
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// PUT (Update) a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update product and return the updated version
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct); // Return the updated product
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id); // Delete product by ID
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted' }); // Confirm deletion
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
