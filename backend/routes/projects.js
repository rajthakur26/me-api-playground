const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.get("/skill/:skill", async (req, res) => {
  const skill = req.params.skill.toLowerCase();
  const projects = await Project.find({ skills: skill });
  res.json(projects);
});

router.post("/", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
});

module.exports = router;