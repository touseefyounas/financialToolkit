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
    res.status(200).json({ message: "Login successful", user});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Failed to log out");
    }
    res.send("Logged out successfully");
  });
};

const auth = (req, res) => {
  if (req.session.userId) {
    res.status(200)
  } else {
    res.status(401).json({message: "Unauthorized: Please login."})
  }
}

module.exports = { registerUser, loginUser, logoutUser, auth };
