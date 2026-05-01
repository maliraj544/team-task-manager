const express = require("express");
const Project = require("../models/Project");
const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/roleMiddleware");

const router = express.Router();

// Create Project (Admin only)
router.post("/", protect, isAdmin, async (req, res) => {
  const project = await Project.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.json(project);
});

// Get Projects
router.get("/", protect, async (req, res) => {
  const projects = await Project.find().populate("members", "name email");
  res.json(projects);
});

module.exports = router;