// controllers/feedback_controller.js
const catchAsyncError = require("../middlewares/catchAsyncError");
const Feedback = require("../models/feedbackModel");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");

exports.submitFeedback = catchAsyncError(async (req, res, next) => {
  const { rating, message } = req.body;
  const token = req.headers.authorization;
  if (!token) {
    return next(new ErrorHandler("Missing token", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Create the feedback document with a reference to the user.
  const feedback = await Feedback.create({
    user: decoded.id,
    rating,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Feedback submitted successfully",
    feedback,
  });
});
