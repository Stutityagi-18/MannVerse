const JournalEntry = require("../models/JournalEntry");

const createEntry = async (req, res) => {
  try {
    const { body, moodScore, tags } = req.body;

    const entry = await JournalEntry.create({
      userId: req.user.id,
      body,
      moodScore,
      tags,
    });

    res.status(201).json({
      success: true,
      entry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyEntries = async (req, res) => {
  try {
    const entries = await JournalEntry.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(entries);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createEntry,
  getMyEntries,
};
