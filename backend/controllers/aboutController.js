// backend/controllers/aboutController.js

const About = require('../models/About'); // Import the About model

// GET about page content
exports.getAboutPageContent = async (req, res) => {
  try {
    // Fetch the about page content from the database (assuming there's one record)
    const aboutContent = await About.findOne();

    // Check if the about content exists
    if (!aboutContent) {
      return res.status(404).json({ message: 'About page content not found' });
    }

    // Return the about content as a JSON response
    res.json(aboutContent);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// PUT to update the about page content
exports.updateAboutPageContent = async (req, res) => {
  try {
    const { title, description, missionStatement } = req.body;

    // Validate input
    if (!title || !description || !missionStatement) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Assuming only one document for the about page
    const aboutContent = await About.findOneAndUpdate(
      {},
      { title, description, missionStatement },
      { new: true } // Return the updated document
    );

    if (!aboutContent) {
      return res.status(404).json({ message: 'About page content not found' });
    }

    // Return the updated about content
    res.json({ message: 'About page content updated successfully', aboutContent });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
