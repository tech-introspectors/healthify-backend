// routes/feedback_routes.js
const express = require("express");
const router = express.Router();
const { submitFeedback } = require("../controllers/feedback_controller");

// POST /api/v1/feedback/
router.post("/", submitFeedback);

module.exports = router;
