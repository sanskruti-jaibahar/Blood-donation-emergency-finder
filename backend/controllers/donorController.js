const Donor = require("../models/donor"); 

exports.registerDonor = async (req, res) => {
  try {
    const donor = await Donor.create(req.body);
    res.status(201).json({ message: "Donor Registered", data: donor });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getDonors = async (req, res) => {
  try {
    const donors = await Donor.find({ available: true });
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};