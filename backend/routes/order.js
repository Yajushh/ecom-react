const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Create order
router.post('/', async (req, res) => {
  const { userId, products, totalAmount } = req.body;
  try {
    const newOrder = new Order({ userId, products, totalAmount });
    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully!', order: newOrder });
  } catch (err) {
    res.status(500).json({ message: 'Error creating order', error: err });
  }
});

// Get order history by user
router.get('/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders', error: err });
  }
});

module.exports = router;
