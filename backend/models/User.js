const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Create a schema for User
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (v) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(v),
      message: 'Please enter a valid email address',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Middleware to hash the password before saving the user
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // If password is not modified, skip hashing
  try {
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
  } catch (err) {
    next(err); // Pass any errors to the next middleware
  }
});

// Method to compare passwords during login
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password); // Compare password with hashed password
};

// Create a model for User based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
