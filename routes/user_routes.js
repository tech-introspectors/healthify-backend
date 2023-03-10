const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserDetails,
} = require("../controllers/user_controller");
const { isAuthenticatedUser } = require("../middlewares/auth");

const route = express.Router();

// users related routes
route.route("/user-register").post(registerUser);
route.route("/user-login").post(loginUser);
route.route("/user-logout").post(logoutUser);

// user details route
route.route("/user-me").get(isAuthenticatedUser, getUserDetails);

module.exports = route;
