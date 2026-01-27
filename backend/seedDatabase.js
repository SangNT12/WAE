const mongoose = require('mongoose');
const HomeContent = require('./models/HomeContent');
const homeContentData = require('./data/homeContent');

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
    console.log('Cleared existing home content');

    // Insert new data
    const content = new HomeContent(homeContentData);
    await content.save();
    console.log('Successfully seeded database with home content');

    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}
