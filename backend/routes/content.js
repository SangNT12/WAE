const express = require('express');
const router = express.Router();
const HomeContent = require('../models/HomeContent');

// Get all home page content
router.get('/home', async (req, res) => {
  try {
    const content = await HomeContent.findOne().sort({ createdAt: -1 });
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get featured cards
router.get('/featured-cards', async (req, res) => {
  try {
    const content = await HomeContent.findOne().sort({ createdAt: -1 });
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.json(content.featuredCards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get contributions
router.get('/contributions', async (req, res) => {
  try {
    const content = await HomeContent.findOne().sort({ createdAt: -1 });
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.json(content.contributions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get about section
router.get('/about', async (req, res) => {
  try {
    const content = await HomeContent.findOne().sort({ createdAt: -1 });
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.json(content.about);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
