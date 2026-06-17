const mongoose = require("mongoose");

const aiReportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    summary: String,
    reflection: String,
    suggestion: String,
    dominantEmotion: String,

    tags: {
      type: [String],
      default: [],
    },

    entriesCount: {
      type: Number,
      default: 0,
    },

    generationCount: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AIReport", aiReportSchema);