const express = require("express");

const {
  createGratitude,
  getMyGratitudes,
} = require("../controllers/gratitude.controller");

const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", protect, createGratitude);

router.get("/", protect, getMyGratitudes);

module.exports = router;