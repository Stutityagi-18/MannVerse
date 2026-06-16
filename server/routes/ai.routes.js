const express = require("express");

const router = express.Router();

const { getAIReport } = require("../controllers/ai.controller");
const { protect } = require("../middleware/auth.middleware");

router.get("/report", protect, getAIReport);

module.exports = router;