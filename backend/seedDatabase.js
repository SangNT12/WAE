const mongoose = require('mongoose');
const HomeContent = require('./models/HomeContent');
const Toolchain = require('./models/Toolchain');
const homeContentData = require('./data/homeContent');
const toolchainData = require('./data/toolchain');
const navigationData = require('./data/navigation');
const partnersData = require('./data/partners');
const useCasesData = require('./data/useCases');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/webapp')
  .then(() => {
    console.log('MongoDB connected');
    return seedDatabase();
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

async function seedDatabase() {
  try {
    // Clear existing data
    await HomeContent.deleteMany({});
    await Toolchain.deleteMany({});
    console.log('Cleared existing data');

    // Insert home content
    const content = new HomeContent(homeContentData);
    await content.save();
    console.log('Successfully seeded home content');

    // Insert toolchain data
    const toolchain = new Toolchain(toolchainData);
    await toolchain.save();
    console.log('Successfully seeded toolchain data');

    // Log navigation, partners, and use cases data (these will be served from JSON files via API routes)
    console.log('Navigation data is ready to be served');
    console.log('Partners data is ready to be served');
    console.log('Use cases data is ready to be served');

    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}
