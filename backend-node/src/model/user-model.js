const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  userId: Number,
  username: { type: String, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", UserModel);
