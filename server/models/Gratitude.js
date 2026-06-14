const mongoose = require("mongoose");

const gratitudeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    thing1: {
      type: String,
      required: true,
    },

    thing2: {
      type: String,
      required: true,
    },

    thing3: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Gratitude",
  gratitudeSchema
);