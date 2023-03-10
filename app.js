const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// default routes
app.use("/", (req, res) => {
  res.send(
    "<h2 style = 'width: 100%; height: 100vh; display: grid; place-items: center'>Healthify server is running...</h2>"
  );
});

module.exports = app;
