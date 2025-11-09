// scripts/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const CityData = require('../models/dataModel');
const geojson = require('../data.js'); // adjust path if needed

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const entries = geojson.features.map(f => ({
      projectName: f.projectName,
      ward: f.ward,
      address: f.address,
      status: f.status,
      agency: f.agency,
      totalUnits: f.totalUnits,
      units_0_30_AMI: f.units_0_30_AMI,
      units_31_50_AMI: f.units_31_50_AMI,
      units_51_60_AMI: f.units_51_60_AMI,
      units_61_80_AMI: f.units_61_80_AMI,
      units_81_AMI: f.units_81_AMI,
      coordinates: f.coordinates
    }));

    await CityData.deleteMany(); // optional: clear old data
    await CityData.insertMany(entries);
    console.log('✅ Data inserted!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('❌ Error inserting data:', err.message);
  });
