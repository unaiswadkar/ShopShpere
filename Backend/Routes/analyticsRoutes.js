const express = require("express");
const { protect } = require("../Middleware/authMiddleware");
const { admin } = require("../Middleware/adminMiddleware");
const { getAdminStats } = require("../Controllers/analyticsControllers.js");

const router = express.Router();
router.get("/", protect, admin, getAdminStats);
module.exports = router;
