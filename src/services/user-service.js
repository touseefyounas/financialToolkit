const bcrypt = require("bcrypt");
const userRepository = require("../respository/user-repository");

class UserService {
  async registerUser(userData) {
    const existingUser = await userRepository.findUserByEmail(userData.email);
    if (existingUser) {
      throw new Error("User already exists. Please sign in");
    }
    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, salt);
    return await userRepository.createUser(userData);
  }

  async getAllUsers() {
    return userRepository.findAllUsers();
  }

  async loginUser(email, password) {
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }
    return user;
  }

  async deleteUser(userId) {
    return userRepository.deleteUserById(userId);
  }
}

module.exports = new UserService();
