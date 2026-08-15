const mongoose = require("mongoose");

const bloodBankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  inventory: { 
    "A+": { type: Number, default: 0 }, 
    "A-": { type: Number, default: 0 }, 
    "B+": { type: Number, default: 0 }, 
    "B-": { type: Number, default: 0 },
    "O+": { type: Number, default: 0 }, 
    "O-": { type: Number, default: 0 }, 
    "AB+": { type: Number, default: 0 }, 
    "AB-": { type: Number, default: 0 }
  }
}, { timestamps: true });

module.exports = mongoose.model("BloodBank", bloodBankSchema);