const AIReport = require("../models/AIReport");
const JournalEntry = require("../models/JournalEntry");
const { generateReflection } = require("../services/ai.service");

const getAIReport = async (req, res) => {
  try {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 999);

    const today = new Date().toISOString().split("T")[0];

    const entries = await JournalEntry.find({
      userId: req.user.id,
      createdAt: {
        $gte: start,
        $lte: end,
      },
    });

    const entriesCount = entries.length;
    if (entriesCount === 0) {
    return res.status(400).json({
      message: "No journal entries found for today.",
    });
  }
    const existingReport = await AIReport.findOne({
      userId: req.user.id,
      date: today,
    });

    // Same entries => DB se return
    if (
      existingReport &&
      existingReport.entriesCount === entriesCount
    ) {
      return res.json(existingReport);
    }

    // Daily limit = 3 regenerations
    if (
      existingReport &&
      existingReport.generationCount >= 3
    ) {
      return res.status(429).json({
        message:
          "Daily AI report limit reached. Try again tomorrow.",
      });
    }

    const text = entries.map((e) => e.body).join("\n");

    const report = await generateReflection(text);

    // Existing report update
    if (existingReport) {
      existingReport.summary = report.summary;
      existingReport.reflection = report.reflection;
      existingReport.suggestion = report.suggestion;
      existingReport.dominantEmotion =
        report.dominantEmotion;
      existingReport.tags = report.tags;

      existingReport.entriesCount = entriesCount;
      existingReport.generationCount += 1;

      await existingReport.save();

      return res.json(existingReport);
    }

    // First report of day
    const newReport = await AIReport.create({
      userId: req.user.id,
      date: today,

      summary: report.summary,
      reflection: report.reflection,
      suggestion: report.suggestion,
      dominantEmotion: report.dominantEmotion,
      tags: report.tags,

      entriesCount,
      generationCount: 1,
    });

    return res.json(newReport);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "AI generation failed",
    });
  }
};

module.exports = { getAIReport };