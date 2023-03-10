const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middlewares/error");

const user = require("./routes/user_routes");

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1", user);

// Middleware for Errors Handling.
app.use(errorMiddleware);

module.exports = app;
