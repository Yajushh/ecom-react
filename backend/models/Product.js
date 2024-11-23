const mongoose = require('mongoose');

// Create a schema for Product
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Ensure product name is unique in the database
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price cannot be less than zero'], // Ensure price is non-negative
  },
  stock: {
    type: Number,
    default: 0,
    min: [0, 'Stock cannot be negative'], // Ensure stock is non-negative
  },
  category: {
    type: String,
    required: true,
    enum: ['electronics', 'clothing', 'home', 'beauty', 'sports'], // Restrict categories to predefined values
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Create a model for Product based on the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
