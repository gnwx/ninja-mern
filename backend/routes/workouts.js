const express = require("express");

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
router.post("/", (req, res) => {
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
