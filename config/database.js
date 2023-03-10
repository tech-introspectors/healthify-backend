const mongoose = require("mongoose");

console.log(process.env.DATABASE_URI);

const connectDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("Mongoodb is connected: " + data.connection.host);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = connectDatabase;
