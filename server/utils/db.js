//const { default: mongoose } = require("mongoose");

const mongoose = require("mongoose");
const URL = process.env.MONGODB_URL;
//mongoose.connect(URL);
const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

module.exports = connectDB;
