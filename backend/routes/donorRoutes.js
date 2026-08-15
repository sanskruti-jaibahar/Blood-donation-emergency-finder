const express = require("express");
const router = express.Router();
const Donor = require("../models/donor");

// Register donor
router.post("/", async (req, res) => {
  try {
    const donor = await Donor.create(req.body);

    res.status(201).json({
      message: "Donor Registered Successfully",
      data: donor,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Get available donors
router.get("/", async (req, res) => {
  try {
    const donors = await Donor.find({ available: true });

    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;