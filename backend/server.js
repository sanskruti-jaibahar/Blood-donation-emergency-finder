const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));
const app = express();
app.use(cors());
app.use(express.json());
const Request = mongoose.model("Request", new mongoose.Schema({
  patientName: String, bloodGroup: String, units: Number, 
  hospital: String, location: String, phone: String, status: {type: String, default: "Pending"}
}, {timestamps: true}));

const BloodBank = mongoose.model("BloodBank", new mongoose.Schema({
  name: String, location: String, phone: String,
  inventory: { "A+": Number, "A-": Number, "B+": Number, "B-": Number, "O+": Number, "O-": Number, "AB+": Number, "AB-": Number }
}, {timestamps: true}));
app.get("/api/requests", async (req, res) => {
  const requests = await Request.find({ status: "Pending" });
  res.json(requests);
});

app.post("/api/requests", async (req, res) => {
  const request = await Request.create(req.body);
  res.status(201).json(request);
});

app.get("/api/bloodbanks", async (req, res) => {
  const banks = await BloodBank.find();
  res.json(banks);
});

app.post("/api/bloodbanks", async (req, res) => {
  const bank = await BloodBank.create(req.body);
  res.status(201).json(bank);
});

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));