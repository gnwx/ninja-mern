const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require("../controllers/workoutController");

const router = express.Router();
// GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

// POST new workout
router.post("/", createWorkout);

// DELETE workout
router.delete("/:id", (req, res) => {
  res.json({ msgg: "DELETE workout" });
});

// UPDATE workout
router.patch("/:id", (req, res) => {
  res.json({ msgg: "UPDATE workout" });
});

module.exports = router;
