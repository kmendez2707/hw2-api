const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  projectName: String,
  ward: String,
  address: String,
  status: String,
  agency: String,
  totalUnits: Number,
  units_0_30_AMI: Number,
  units_31_50_AMI: Number,
  units_51_60_AMI: Number,
  units_61_80_AMI: Number,
  units_81_AMI: Number,
  coordinates: {
    type: [Number], // [longitude, latitude]
    index: '2dsphere'
  }
});

module.exports = mongoose.model('CityData', DataSchema);
