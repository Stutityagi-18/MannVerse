const express = require("express");

const {
  createEntry,
  getMyEntries,
} = require("../controllers/entry.controller");

const { protect } = require("../middleware/auth.middleware");
const router = express.Router();
router.post("/", protect, createEntry);
router.get("/", protect, getMyEntries);

module.exports = router;