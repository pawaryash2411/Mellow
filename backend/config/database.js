const mongoose = require("mongoose");
const dotenv = require("dotenv");

const DatabaseConnection = () => {
  mongoose
    .connect(process.env.db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB Connected with ${data.connection.host}`);
    });
};
module.exports = DatabaseConnection;
