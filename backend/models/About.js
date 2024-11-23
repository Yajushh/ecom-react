const mongoose = require('mongoose');

// Define the schema for the "About" page content
const aboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is required
  },
  description: {
    type: String,
    required: true, // Description is required
  },
  missionStatement: {
    type: String,
    required: true, // Mission Statement is required
  },
  date: {
    type: Date,
    default: Date.now, // Automatically set to the current date and time
  },
});

// Create the About model using the schema
const About = mongoose.model('About', aboutSchema);

module.exports = About;
