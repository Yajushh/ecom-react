const ContactMessage = require('../models/ContactMessage'); // Import ContactMessage model

// Create a new contact message
exports.createContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate the incoming data
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new contact message
    const newMessage = new ContactMessage({
      name,
      email,
      subject,
      message,
      date: Date.now(), // Save the current date and time
    });

    // Save the contact message to the database
    await newMessage.save();
    res.status(201).json({ message: 'Your message has been sent successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all contact messages (for admin)
exports.getAllContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find(); // Fetch all contact messages from the database
    res.json(messages); // Return the messages as a JSON response
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a specific contact message by ID
exports.getContactMessageById = async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id); // Find message by ID
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json(message); // Return the message
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
