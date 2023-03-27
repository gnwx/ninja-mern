const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();
// GET all workouts
router.get("/", (req, res) => {
  res.json({ msgg: "GET All workouts" });
});

//GET a single workout
router.get("/:id", (req, res) => {
  res.json({ msgg: "Get single workout" });
});

// POST new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
  res.json({ msgg: "POST new workout" });
});

// DELETE workout
router.delete("/:id", (req, res) => {
  res.json({ msgg: "DELETE workout" });
});

// UPDATE workout
router.patch("/:id", (req, res) => {
  res.json({ msgg: "UPDATE workout" });
});

module.exports = router;
