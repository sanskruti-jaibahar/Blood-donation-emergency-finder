const mongoose = require('mongoose');
const DonorSchema = new mongoose.Schema({
  name: {type: String, required: true},
  bloodGroup: {type: String, enum: ['A+','A-','B+','B-','O+','O-','AB+','AB-'], required: true},
  age: Number,
  phone: {type: String, required: true},
  location: {type: String, required: true}, 
  lastDonated: Date,
  available: {type: Boolean, default: true}
}, {timestamps: true});
module.exports = mongoose.model('Donor', DonorSchema);