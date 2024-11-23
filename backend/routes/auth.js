// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Import the authController
const verifyToken = require('../middleware/authMiddleware'); // Import the JWT verification middleware

// Route to register a new user
router.post('/register', authController.register);

// Route to login a user
router.post('/login', authController.login);

// Route to get user profile (protected route)
router.get('/profile', verifyToken, authController.getUserProfile); // Protect with JWT middleware

module.exports = router;
