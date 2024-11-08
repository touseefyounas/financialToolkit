const userService = require("../services/user-service");

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await userService.registerUser(userData);
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.loginUser(email, password);

    req.session.userId = user._id;
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Failed to log out");
    }
    res.status(200).send("Logged out successfully");
  });
};

const updateUser = async (req, res) => {
  const updateData = req.body;

  try {
    const updatedUser = await userService.updateUser(req.params.id, updateData);
    res
      .status(200)
      .json({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await userService.deleteUser(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userService.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const auth = (req, res) => {
  console.log("Session:", req.session);
  if (req.session.userId) {
    return res.status(200).json({
      message: "Authenticated successfully.",
      userId: req.session.userId,
    });
  } else {
    console.log("Testing the auth status");
    return res.status(401).json({ message: "Unauthorized: Please login." });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  deleteUser,
  getUserById,
  auth,
};
