const mongoose = require("mongoose");
const shortid = require("shortid");

const UserModel = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  username: { type: String, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", UserModel);
