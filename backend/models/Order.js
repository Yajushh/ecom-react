const mongoose = require('mongoose');

// Define the Order schema
const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true, // Ensure userId is provided
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true, // Ensure productId is provided
      },
      quantity: {
        type: Number,
        required: true,
        min: 1, // Ensure quantity is at least 1
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
    min: 0, // Ensure totalAmount is non-negative
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'shipped', 'completed', 'cancelled'], // Allow only predefined statuses
    default: 'pending', // Default status is 'pending'
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the Order model
module.exports = mongoose.model('Order', OrderSchema);
