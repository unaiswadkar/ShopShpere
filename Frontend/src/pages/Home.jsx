import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://shopshpere-ej3z.onrender.com/api/auth/products");
        const data = await res.json();
        setProducts(data.slice(0, 5)); // Featured products
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-banner">
        <h1>Welcome to ShopSphere</h1>
        <p>Discover the best products at unbeatable prices.</p>
      </div>
      <h2 style={{ marginLeft: "20px" }}>Featured Products</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
