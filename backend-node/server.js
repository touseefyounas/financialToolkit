require("dotenv").config();

const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");

// const User = require("./model/User");
const userController = require("./src/controllers/user-controller");
const taxController = require("./src/controllers/tax-controller");

// mongoose.connect(process.env.DATABASE_URL);
mongoose.connect(`mongodb://localhost:27017/financialtoolkit`, {
  authSource: "admin",
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

const store = new session.MemoryStore();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: false,
    store,
    cookie: {
      maxAge: 300000000,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    },
  })
);

app.get("/", (req, res) => {
  res.send("Financial Kit Backend Running");
});

app.post("/login", userController.loginUser);

app.post("/register", userController.registerUser);

app.post("/logout", userController.logoutUser);

app.get("/auth", userController.auth);

app.post("/income-tax", taxController.getTax);

app.put("/user/:id", userController.updateUser);

app.delete("/user/:id", userController.deleteUser);

app.get("/user/:id", userController.getUserById);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
