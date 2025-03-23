// lib/models/feedbackModel.js
const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  // Reference to the user providing feedback (optional, but useful)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Rating provided by the user (e.g., 1 to 5)
  rating: {
    type: Number,
    required: [true, "Please provide a rating"],
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating cannot be more than 5"],
  },
  // Feedback message text.
  message: {
    type: String,
    required: [true, "Please provide your feedback"],
  },
  // Timestamp of when the feedback was created.
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
