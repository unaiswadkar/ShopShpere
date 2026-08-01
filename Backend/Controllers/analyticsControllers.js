const Order = require("../Model/Order.js");
const User = require("../Model/USer.js");
const Product = require("../Model/Product.js");

const getAdminStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "user" });
    const totalOrders = await Order.countDocuments({});
    const totalProducts = await Product.countDocuments({});

    const orders = await Order.find({});
    const totalRevenueData = Order.reduce(
      (acc, order) => acc + order.totalAmount,
      0,
    );
    res.json({
      totalUsers,
      totalOrders,
      totalProducts,
      totalRevenueData: totalRevenueData,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching stats", error });
  }
};

module.exports = { getAdminStats };
