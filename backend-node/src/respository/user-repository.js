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
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      throw new Error("Error fetching user by ID: " + error.message);
    }
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

  async updateUserById(id, updateData) {
    return await User.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
  }

  async deleteUserById(userId) {
    return User.findByIdAndDelete(userId);
  }
}

module.exports = new UserRepository();
