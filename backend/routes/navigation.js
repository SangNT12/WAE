const express = require('express');
const router = express.Router();
const navigationData = require('../data/navigation');

// Get all navigation items
router.get('/', (req, res) => {
  try {
    res.json(navigationData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get navigation item by label
router.get('/:label', (req, res) => {
  try {
    const item = navigationData.find(
      (nav) => nav.label.toLowerCase() === req.params.label.toLowerCase()
    );
    if (!item) {
      return res.status(404).json({ error: 'Navigation item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
