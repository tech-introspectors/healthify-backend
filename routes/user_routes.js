const express = require("express");
const { registerUser, loginUser } = require("../controllers/user_controller");
const route = express.Router();

// users related routes
route.route("/user-register").post(registerUser);
route.route("/user-login").post(loginUser);

module.exports = route;
