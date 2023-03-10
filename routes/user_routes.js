const express = require("express");
const { registerUser } = require("../controllers/user_controller");
const route = express.Router();

// users related routes
route.route("/user-register").post(registerUser);

module.exports = route;
