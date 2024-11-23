const BillPayment = require('../models/BillPayment'); // Import BillPayment model

// POST (Create) a new bill payment
exports.createBillPayment = async (req, res) => {
  try {
    const { userId, orderId, amount, paymentMethod, paymentStatus } = req.body;

    // Validate the payment data (you can add more validation here)
    if (!userId || !orderId || !amount || !paymentMethod || !paymentStatus) {
      return res.status(400).json({ message: 'Missing required payment data' });
    }

    // Create a new bill payment record
    const newPayment = new BillPayment({
      userId,
      orderId,
      amount,
      paymentMethod,
      paymentStatus,
      paymentDate: Date.now(),
    });

    // Save the payment to the database
    await newPayment.save();
    res.status(201).json({ message: 'Bill payment processed successfully', payment: newPayment });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET all bill payments (Optional)
exports.getAllBillPayments = async (req, res) => {
  try {
    const payments = await BillPayment.find(); // Fetch all bill payments from the database
    res.json(payments); // Return the payments as a JSON response
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET a specific bill payment by ID
exports.getBillPaymentById = async (req, res) => {
  try {
    const payment = await BillPayment.findById(req.params.id); // Find bill payment by ID
    if (!payment) {
      return res.status(404).json({ message: 'Bill payment not found' });
    }
    res.json(payment); // Return the found payment
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
