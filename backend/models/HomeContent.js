const mongoose = require('mongoose');

const homeContentSchema = new mongoose.Schema({
  hero: {
    title: String,
    subtitle: String,
    description: String,
    buttonText: String,
    backgroundImage: String
  },
  about: {
    title: String,
    description: String
  },
  featuredCards: [{
    title: String,
    description: String,
    icon: String
  }],
  targetPicture: {
    title: String,
    description: String,
    image: String
  },
  contributions: [{
    title: String,
    description: String,
    icon: String
  }],
  interoperability: {
    title: String,
    description: String,
    features: [String]
  },
  techDetails: {
    title: String,
    description: String,
    technologies: [{
      name: String,
      description: String
    }]
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Update the updatedAt timestamp before saving
homeContentSchema.pre('save', function(next) {
  if (typeof next === 'function') {
    this.updatedAt = Date.now();
    next();
  }
});

module.exports = mongoose.model('HomeContent', homeContentSchema);
