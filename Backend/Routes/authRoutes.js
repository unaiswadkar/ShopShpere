const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUsers,
} = require("../Controllers/authControllers");
const { protect } = require("../Middleware/authMiddleware");
const { admin } = require("../Middleware/adminMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", protect, admin, getUsers);

module.exports = router;
