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

  async getUserById(userId) {
    const user = await userRepository.findUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
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

  async updateUser(id, updateData) {
    const user = await userRepository.updateUserById(id, updateData);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async deleteUser(userId) {
    const user = await userRepository.deleteUserById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return { message: "User deleted successfully" };
  }
}

module.exports = new UserService();
