// routes/user_routes.js
const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserDetails,
  updateProfile, // newly added function
} = require("../controllers/user_controller");

const router = express.Router();

router.route("/user-register").post(registerUser);
router.route("/user-login").post(loginUser);
router.route("/user-logout").post(logoutUser);
router.route("/user-me").get(getUserDetails);

// Add this route for profile updates.
router.route("/user/update-profile").put(updateProfile);

module.exports = router;
