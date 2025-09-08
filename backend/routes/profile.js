const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

router.get("/", async (req, res) => {
  const profile = await Profile.find().populate("projects");
  res.json(profile);
});

router.post("/", async (req, res) => {
  const newProfile = new Profile(req.body);
  await newProfile.save();
  res.status(201).json(newProfile);
});

router.put("/:id", async (req, res) => {
  const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProfile);
});

router.get("/search", async (req, res) => {
  const q = req.query.q || "";
  const results = await Profile.find({ $text: { $search: q } }).populate("projects");
  res.json(results);
});

module.exports = router;