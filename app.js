const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

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

module.exports = app;
