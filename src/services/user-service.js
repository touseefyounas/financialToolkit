const userRepository = require('../respository/user-repository')


class UserService {
    
    async createUser(userData) {
        return userRepository.createUser(userData);
    }

    async getAllUsers() {
        return userRepository.findAllUsers()
    }

    async getUser(userId) {
        return userRepository.findUserById(userId)
    }

    async deleteUser(userId) {
        return userRepository.deleteUserById(userId)
    }

}

module.exports = new UserService();