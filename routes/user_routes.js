const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserDetails,
} = require("../controllers/user_controller");

const route = express.Router();

// users related routes
route.route("/user-register").post(registerUser);
route.route("/user-login").post(loginUser);
route.route("/user-logout").post(logoutUser);
// route.route("")
// user details route
route.route("/user-me").get(getUserDetails);

module.exports = route;
