// backend/routes/about.js
const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');  // Import the aboutController

// Route to get the About page content
router.get('/', aboutController.getAboutPageContent);

module.exports = router;
