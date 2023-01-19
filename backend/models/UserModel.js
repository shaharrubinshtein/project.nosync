const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 8,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    max: 2048,
    min: 6,
  }

});

module.exports = mongoose.model("User", userSchema);