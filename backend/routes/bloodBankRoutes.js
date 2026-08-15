const express = require("express");
const router = express.Router();
const BloodBank = require("../models/BloodBank");

router.post("/", async (req, res) => {
  try {
    const bank = await BloodBank.create(req.body);
    res.status(201).json(bank);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const banks = await BloodBank.find();
    res.json(banks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;