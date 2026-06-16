const JournalEntry = require("../models/JournalEntry");
const { generateReflection } = require("../services/ai.service");

const getAIReport = async (req, res) => {
  try {
    const entries = await JournalEntry.find({
      userId: req.user.id,
    });

    const text = entries.map((e) => e.body).join("\n");

    const report = await generateReflection(text);

    res.json(report);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "AI generation failed",
    });
  }
};

module.exports = { getAIReport };