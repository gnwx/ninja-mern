const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const router = express.Router();
// GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

// POST new workout
router.post("/", createWorkout);

// DELETE workout
router.delete("/:id", deleteWorkout);

// UPDATE workout
router.patch("/:id", updateWorkout);

module.exports = router;
