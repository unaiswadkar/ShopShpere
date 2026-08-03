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
        imageUrl:
          "https://suprememobiles.in/cdn/shop/files/1_78a803af-e5a5-441a-a9b7-3b9f7affdfd8.webp?v=1769864108",
        rating: 4.9,
        numReviews: 125,
      },
      {
        name: "Samsung Galaxy S25",
        description: "Premium Android smartphone.",
        price: 109999,
        category: "Electronics",
        stock: 18,
        imageUrl:
          "https://images.samsung.com/in/smartphones/galaxy-s25/buy/product_color_navy_PC.png",
        rating: 4.8,
        numReviews: 110,
      },
      {
        name: "MacBook Air M4",
        description: "Apple M4 laptop.",
        price: 149999,
        category: "Laptop",
        stock: 10,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTVI2sw44TnoDkfMp9vAPi-n2l4HuYXLGWgycn9eZg7qvGP-_ddTJ7-CfuPepnwzrAy2d8tCunzQO1iEKhBMybSkSKo2NLb_nOnCwtbm93AW4K264s-hnSk38s",
        rating: 5.0,
        numReviews: 89,
      },
      {
        name: "Dell XPS 15",
        description: "Powerful Windows laptop.",
        price: 139999,
        category: "Laptop",
        stock: 15,
        imageUrl:
          "https://dellstatic.luroconnect.com/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/d/e/dell-dc15255-laptop-silver-deals-in-independence-campaign-dl11i2tt-original.png",
        rating: 4.7,
        numReviews: 65,
      },
      {
        name: "Sony WH-1000XM5",
        description: "Noise cancelling headphones.",
        price: 29999,
        category: "Accessories",
        stock: 40,
        imageUrl:
          "https://media-ik.croma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/272419_jqvb9x.png?tr=w-640",
        rating: 4.8,
        numReviews: 210,
      },
      {
        name: "Apple Watch Series 10",
        description: "Premium smartwatch.",
        price: 45999,
        category: "Wearables",
        stock: 25,
        imageUrl:
          "https://rukminim2.flixcart.com/image/1536/1536/xif0q/smartwatch/k/p/t/-enriched-transparent-original-imah4jnd4hhwrsph.png?q=90",
        rating: 4.9,
        numReviews: 95,
      },
      {
        name: "asus f15",
        description: "Comfortable sports shoes.",
        price: 8999,
        category: "Footwear",
        stock: 50,
        imageUrl:
          "https://rukminim1.flixcart.com/image/1536/1536/xif0q/computer/w/c/7/-enriched-transparent-original-imahg4uthskctx9g.png?q=90",
        rating: 4.6,
        numReviews: 140,
      },
      {
        name: "Gaming Monitor",
        description: "Slim fit denim jeans.",
        price: 3499,
        category: "Fashion",
        stock: 60,
        imageUrl:
          "https://image.benq.com/is/image/benqco/01-ex271q-front-high?$ResponsivePreset$&fmt=png-alpha",
        rating: 4.5,
        numReviews: 55,
      },
      {
        name: "Logitech MX Master 3S",
        description: "Wireless ergonomic mouse.",
        price: 9999,
        category: "Accessories",
        stock: 35,
        imageUrl:
          "https://rukminim1.flixcart.com/image/1536/1536/xif0q/mouse/p/e/g/-enriched-transparent-original-imahbg3mw94zhfnp.png?q=90",
        rating: 4.9,
        numReviews: 180,
      },
      {
        name: "Dell 27-inch 4K Monitor",
        description: "Ultra HD IPS display.",
        price: 28999,
        category: "Monitor",
        stock: 22,
        imageUrl:
          "https://dellstatic.luroconnect.com/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/2/1/210-bqxz_1.png",
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
