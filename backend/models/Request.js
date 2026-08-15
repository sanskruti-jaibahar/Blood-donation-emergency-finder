const mongoose = require('mongoose');
const RequestSchema = new mongoose.Schema({
  patientName: {type: String, required: true},
  bloodGroupNeeded: {type: String, required: true},
  units: {type: Number, default: 1},
  hospital: String,
  contact: {type: String, required: true},
  urgency: {type: String, enum: ['Low','Medium','Emergency'], default: 'Emergency'},
  status: {type: String, enum: ['Pending','Fulfilled','Cancelled'], default: 'Pending'}
}, {timestamps: true});
module.exports = mongoose.model('Request', RequestSchema);