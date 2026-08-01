const express = require("express");
const { protect } = require("../Middleware/authMiddleware");
const { admin } = require("../Middleware/adminMiddleware");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../Controllers/productControllers");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router
  .route("/")
  .get(getProducts)
  .post(protect, admin, upload.single("image"), createProduct);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, upload.single("image"), updateProduct)
  .delete(protect, admin, deleteProduct);
module.exports = router;
