
// Bring in the DB connection and the Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from the JSON file
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// Delete existing records, then insert seed data
const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
};

// Run the seed script
seedDB()
  .then(async () => {
    console.log('Trip data successfully loaded!');
    await Mongoose.connection.close();
    process.exit(0);
  })
  .catch(async (err) => {
    console.error('Error seeding database:', err);
    await Mongoose.connection.close();
    process.exit(1);
  });
