const express = require("express");
const cookiesParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middlewares/error");

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

app.use(express.json());
app.use(cookiesParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// all route imports
const user = require("./routes/user_routes");

app.use("/api/v1", user);
app.use("/api/v1/test", (req, res) => {
  res.status(200).json({message: "running"})
})

// Middleware for Errors Handling.
app.use(errorMiddleware);

module.exports = app;
