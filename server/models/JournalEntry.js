const mongoose = require("mongoose");

const journalEntrySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    body: {
      type: String,
      required: true,
    },

    moodScore: {
      type: Number,
      min: 1,
      max: 10,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    reflection: {
      type: String,
      default: "",
    },

    isCrisisEntry: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("JournalEntry", journalEntrySchema);