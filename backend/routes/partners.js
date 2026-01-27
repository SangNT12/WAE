const express = require('express');
const router = express.Router();
const partnersData = require('../data/partners');

// Get all partners
router.get('/', (req, res) => {
  try {
    res.json(partnersData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get partner by id
router.get('/:id', (req, res) => {
  try {
    const partner = partnersData.find(p => p.id === parseInt(req.params.id));
    if (!partner) {
      return res.status(404).json({ error: 'Partner not found' });
    }
    res.json(partner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
