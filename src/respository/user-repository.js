const User = require("../model/user-model");

class UserRepository {
  async createUser(userData) {
    const user = new User(userData);
    return user.save();
  }

  async findAllUsers() {
    return User.find();
  }

  async findUserById(userId) {
    return User.findById(userId);
  }

  async findUserByUsername(username) {
    try {
      const user = await User.findOne({ username: username });
      return user;
    } catch (err) {
      console.log("Error finding user by username: ", err);
    }
  }

  async findUserByEmail(email) {
    return User.findOne({ email });
  }

  async deleteUserById(userId) {
    return User.deleteOne({ _id: userId });
  }
}

module.exports = new UserRepository();
