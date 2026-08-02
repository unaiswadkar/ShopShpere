import React from "react";

const About = () => {
  const containerStyle = {
    maxWidth: "950px",
    margin: "50px auto",
    padding: "40px",
    background: "#18181b",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    textAlign: "center",
    color: "#fff",
  };

  const buttonStyle = {
    display: "inline-block",
    margin: "10px",
    padding: "12px 24px",
    background: "#f97316",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "0.3s",
  };

  const cardContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
    gap: "20px",
    marginTop: "40px",
  };

  const cardStyle = {
    background: "#27272a",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  return (
    <div style={containerStyle}>
      <img
        src="/logo.png"
        alt="ShopNest"
        style={{
          width: "130px",
          marginBottom: "20px",
        }}
      />

      <h1
        style={{
          fontSize: "3rem",
          color: "#f97316",
          marginBottom: "10px",
        }}
      >
        About ShopNest
      </h1>

      <p
        style={{
          color: "#cbd5e1",
          fontSize: "18px",
          lineHeight: "1.8",
          maxWidth: "750px",
          margin: "20px auto",
        }}
      >
        ShopNest is a modern e-commerce platform designed to provide a fast,
        secure, and enjoyable online shopping experience. From premium products
        to seamless checkout, our goal is to make shopping simple, reliable, and
        accessible for everyone.
      </p>

      <div style={cardContainer}>
        <div style={cardStyle}>
          <h2 style={{ color: "#f97316" }}>🚚 Fast Delivery</h2>
          <p>Quick and reliable shipping to your doorstep.</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "#f97316",  fontSize: "30px", }}>
            🔒 Secure Payments
          </h2>
          <p>Protected payments with trusted payment gateways.</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "#f97316" }}>⭐ Premium Products</h2>
          <p>Only quality products selected for our customers.</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "#f97316" }}>💬 24/7 Support</h2>
          <p>Dedicated customer support whenever you need us.</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "50px",
        }}
      >
        <h2
          style={{
            color: "#f97316",
            marginBottom: "15px",
          }}
        >
          Our Mission
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: "1.8",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Our mission is to provide customers with high-quality products,
          affordable prices, secure payments, and an effortless shopping
          experience through modern web technologies.
        </p>
      </div>

      <div
        style={{
          marginTop: "50px",
        }}
      >
        <h2
          style={{
            color: "#f97316",
            marginBottom: "20px",
          }}
        >
          Built With
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <span style={buttonStyle}>React</span>
          <span style={buttonStyle}>Node.js</span>
          <span style={buttonStyle}>Express.js</span>
          <span style={buttonStyle}>MongoDB</span>
          <span style={buttonStyle}>Redux Toolkit</span>
          <span style={buttonStyle}>JWT Auth</span>
          <span style={buttonStyle}>Cloudinary</span>
          <span style={buttonStyle}>Razorpay</span>
        </div>
      </div>

      <div style={{ marginTop: "60px" }}>
        <h2 style={{ color: "#f97316" }}>Developer</h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "700px",
            margin: "20px auto",
          }}
        >
          Designed and developed by <strong>Unais Wadkar</strong> using the MERN
          Stack. This project showcases authentication, product management,
          shopping cart, secure checkout, order management, and responsive UI.
        </p>

        <a href="/" style={buttonStyle}>
          Start Shopping
        </a>
      </div>
    </div>
  );
};

export default About;
