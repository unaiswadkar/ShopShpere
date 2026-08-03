import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://shopshpere-ej3z.onrender.com/api/auth/products",
        );
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
      <section className="hero">
        <div className="hero-left card">
          <div className="overlay"></div>
          <div className="content">
            <span className="tag">• IN STOCK NOW</span>
            <h1>Upgrade Your Tech Game</h1>
            <p>
              Find your perfect phone — sleek and stylish or budget-friendly.
            </p>

            <Link className="shopnow" to={"/shop"}>Shop Now</Link>
          </div>
        </div>

        <div className="hero-center card">
          <span className="label">GAMING</span>

          <div className="bottom-text">
            <h3>Discover ideal gaming solutions</h3>
          </div>
        </div>

        <div className="hero-right">
          <div className="small-card headphones">
            <span className="label">HEADPHONES</span>

            <div className="bottom-text">
              <h3>Hear the Difference</h3>
            </div>
          </div>

          <div className="small-card watch">
            <span className="label">SMART WATCHES</span>

            <div className="bottom-text">
              <h3>Experience the Latest Technology</h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
