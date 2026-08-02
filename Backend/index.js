const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./Config/db.js");
const userRoutes = require("./Routes/authRoutes.js");
const productRoutes = require("./Routes/productRoutes.js");
const orderRoutes = require("./Routes/orderRoutes.js");
const paymentRoutes = require("./Routes/paymentRoutes.js");
const analyticsRoutes = require("./Routes//analyticsRoutes.js");
dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://shopsphere-frontend-2lz4.onrender.com/",
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.use("/api/auth/", userRoutes);
app.use("/api/auth/products", productRoutes);
app.use("/api/auth/orders", orderRoutes);
app.use("/api/auth/payment", paymentRoutes);
app.use("/api/auth/analytics", analyticsRoutes);

const PORT = process.env.PORT || 5000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
