const express = require("express");
const { protect } = require("../Middleware/authMiddleware");
const { admin } = require("../Middleware/adminMiddleware");

const {
  createOrder,
  getOrder,
  myOrders,
  updateorderStatus,
} = require("../Controllers/orderController");

const router = express.Router();

router.route("/").post(protect, createOrder).get(protect, admin, getOrder);
router.route("/myorders").get(protect, myOrders);
router.route("/:id/status").put(protect, admin, updateorderStatus);

module.exports = router;
