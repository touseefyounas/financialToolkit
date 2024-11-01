const mongoose = require('mongoose')

const UserModel = new mongoose.Schema({
    id: Number,
    username: {type: String, required: true, unique: true},
    password: String,
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true},
})


const User = mongoose.model('User', UserModel)

module.exports = User;