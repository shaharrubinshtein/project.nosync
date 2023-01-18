const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    max: 2048,
    min: 8,
  }

});

module.exports = mongoose.model("User", userSchema);