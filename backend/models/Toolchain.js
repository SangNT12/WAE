const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
  id: Number,
  label: String,
  url: String,
  description: String,
  fullDescription: String,
  features: [String],
  getStarted: String,
  icon: String,
  external: { type: Boolean, default: false }
});

const toolchainSchema = new mongoose.Schema({
  id: Number,
  label: String,
  url: String,
  description: String,
  order: Number,
  tools: [toolSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Toolchain', toolchainSchema);
