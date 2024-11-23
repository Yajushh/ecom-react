const Order = require('../models/Order'); // Import the Order model

// GET all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find(); // Fetch all orders from the database
    res.json(orders); // Send the orders as a JSON response
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET a single order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id); // Find order by ID
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order); // Return the found order
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// POST (Create) a new order
exports.createOrder = async (req, res) => {
  try {
    const { userId, products, totalAmount } = req.body; // Destructure data from request body

    // Create a new order object
    const newOrder = new Order({
      userId,
      products,
      totalAmount,
      orderDate: Date.now(),
      status: 'Pending',
    });

    // Save the order to the database
    await newOrder.save();
    res.status(201).json(newOrder); // Return the newly created order
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// PUT (Update) an order by ID
exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated order
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(updatedOrder); // Return the updated order
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE an order by ID
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id); // Delete order by ID

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' }); // Confirm deletion
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
