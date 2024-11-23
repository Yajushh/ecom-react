const mongoose = require('mongoose');

// Define the Contact schema
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Trim leading and trailing whitespace
  },
  email: {
    type: String,
    required: true,
    trim: true, // Trim leading and trailing whitespace
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'], // Email regex validation
  },
  message: {
    type: String,
    required: true,
    trim: true, // Trim leading and trailing whitespace
  },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Create the Contact model
module.exports = mongoose.model('Contact', ContactSchema);
