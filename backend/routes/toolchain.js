const express = require('express');
const router = express.Router();
const Toolchain = require('../models/Toolchain');

// Get all toolchain data
router.get('/', async (req, res) => {
  try {
    const toolchain = await Toolchain.findOne();
    if (!toolchain) {
      return res.status(404).json({ error: 'Toolchain data not found' });
    }
    res.json(toolchain);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get specific tool by label
router.get('/:label', async (req, res) => {
  try {
    const toolchain = await Toolchain.findOne();
    if (!toolchain) {
      return res.status(404).json({ error: 'Toolchain data not found' });
    }
    const tool = toolchain.tools.find(
      (t) => t.label.toLowerCase().replace(/\s+/g, '-') === req.params.label.toLowerCase()
    );
    if (!tool) {
      return res.status(404).json({ error: 'Tool not found' });
    }
    res.json(tool);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
