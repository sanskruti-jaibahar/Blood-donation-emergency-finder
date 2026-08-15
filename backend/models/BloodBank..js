const mongoose = require('mongoose');
const BloodBankSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: String,
  phone: String,
  email: String,
  inventory: {
    'A+': {type: Number, default: 0}, 'A-': {type: Number, default: 0},
    'B+': {type: Number, default: 0}, 'B-': {type: Number, default: 0},
    'O+': {type: Number, default: 0}, 'O-': {type: Number, default: 0},
    'AB+': {type: Number, default: 0}, 'AB-': {type: Number, default: 0}
  }
}, {timestamps: true});
module.exports = mongoose.model('BloodBank', BloodBankSchema);