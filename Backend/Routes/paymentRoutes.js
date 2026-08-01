const express = require("express");
const {
  createdOrder,
  verifyPayment,
} = require("../Controllers/paymentcontrollers.js");
const { route } = require("./orderRoutes");
const router = express.Router();

router.post("/order", createdOrder);
router.post("/verify", verifyPayment);

module.exports = router;
