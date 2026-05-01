const express = require("express");
const Task = require("../models/Task");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Create Task
router.post("/", protect, async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// Get Tasks
router.get("/", protect, async (req, res) => {
  const tasks = await Task.find()
    .populate("assignedTo", "name email")
    .populate("project", "name");

  res.json(tasks);
});

// Update Task
router.put("/:id", protect, async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(task);
});

module.exports = router;