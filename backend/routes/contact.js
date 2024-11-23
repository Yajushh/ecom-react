const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// Submit contact message
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContactMessage = new Contact({ name, email, message });
    await newContactMessage.save();
    res.status(201).json({ message: 'Message received successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error submitting message', error: err });
  }
});

module.exports = router;
