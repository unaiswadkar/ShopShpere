require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./Model/USer");
const Product = require("./Model/Product");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();

    const hashedPassword = await bcrypt.hash("123456", 10);

    // ================= USERS =================
    const users = [
      {
        name: "Admin One",
        email: "admin1@example.com",
        password: hashedPassword,
        role: "admin",
        verified: true,
      },
      {
        name: "Admin Two",
        email: "admin2@example.com",
        password: hashedPassword,
        role: "admin",
        verified: true,
      },
      {
        name: "John Doe",
        email: "john@example.com",
        password: hashedPassword,
        role: "user",
        verified: true,
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: hashedPassword,
        role: "user",
        verified: true,
      },
      {
        name: "Robert Brown",
        email: "robert@example.com",
        password: hashedPassword,
        role: "user",
        verified: true,
      },
      {
        name: "Emily Wilson",
        email: "emily@example.com",
        password: hashedPassword,
        role: "user",
        verified: true,
      },
    ];

    await User.insertMany(users);

    // ================= PRODUCTS =================
    const products = [
      {
        name: "iPhone 16 Pro",
        description: "Apple flagship smartphone.",
        price: 129999,
        category: "Electronics",
        stock: 20,
        imageUrl: "https://picsum.photos/400/400?random=1",
        rating: 4.9,
        numReviews: 125,
      },
      {
        name: "Samsung Galaxy S25",
        description: "Premium Android smartphone.",
        price: 109999,
        category: "Electronics",
        stock: 18,
        imageUrl: "https://picsum.photos/400/400?random=2",
        rating: 4.8,
        numReviews: 110,
      },
      {
        name: "MacBook Air M4",
        description: "Apple M4 laptop.",
        price: 149999,
        category: "Laptop",
        stock: 10,
        imageUrl: "https://picsum.photos/400/400?random=3",
        rating: 5.0,
        numReviews: 89,
      },
      {
        name: "Dell XPS 15",
        description: "Powerful Windows laptop.",
        price: 139999,
        category: "Laptop",
        stock: 15,
        imageUrl: "https://picsum.photos/400/400?random=4",
        rating: 4.7,
        numReviews: 65,
      },
      {
        name: "Sony WH-1000XM5",
        description: "Noise cancelling headphones.",
        price: 29999,
        category: "Accessories",
        stock: 40,
        imageUrl: "https://picsum.photos/400/400?random=5",
        rating: 4.8,
        numReviews: 210,
      },
      {
        name: "Apple Watch Series 10",
        description: "Premium smartwatch.",
        price: 45999,
        category: "Wearables",
        stock: 25,
        imageUrl: "https://picsum.photos/400/400?random=6",
        rating: 4.9,
        numReviews: 95,
      },
      {
        name: "Nike Air Max",
        description: "Comfortable sports shoes.",
        price: 8999,
        category: "Footwear",
        stock: 50,
        imageUrl: "https://picsum.photos/400/400?random=7",
        rating: 4.6,
        numReviews: 140,
      },
      {
        name: "Levi's 511 Jeans",
        description: "Slim fit denim jeans.",
        price: 3499,
        category: "Fashion",
        stock: 60,
        imageUrl: "https://picsum.photos/400/400?random=8",
        rating: 4.5,
        numReviews: 55,
      },
      {
        name: "Logitech MX Master 3S",
        description: "Wireless ergonomic mouse.",
        price: 9999,
        category: "Accessories",
        stock: 35,
        imageUrl: "https://picsum.photos/400/400?random=9",
        rating: 4.9,
        numReviews: 180,
      },
      {
        name: "Dell 27-inch 4K Monitor",
        description: "Ultra HD IPS display.",
        price: 28999,
        category: "Monitor",
        stock: 22,
        imageUrl: "https://picsum.photos/400/400?random=10",
        rating: 4.7,
        numReviews: 73,
      },
    ];

    await Product.insertMany(products);

    console.log("====================================");
    console.log("✅ Database Seeded Successfully");
    console.log("====================================");

    console.log("\nAdmin Accounts");
    console.log("admin1@example.com | 123456");
    console.log("admin2@example.com | 123456");

    console.log("\nUser Accounts");
    console.log("john@example.com   | 123456");
    console.log("jane@example.com   | 123456");
    console.log("robert@example.com | 123456");
    console.log("emily@example.com  | 123456");

    console.log("\n📦 Products Inserted: 10");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB().then(seedData);