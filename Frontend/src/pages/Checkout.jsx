import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { clearCart } from "../redux/cartSlice";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    fullName: "",
    street: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );

  // -----------------------------
  // BYPASS PAYMENT
  // -----------------------------
  const bypassPayment = async () => {
    try {
      const res = await fetch("https://shopshpere-ej3z.onrender.com/api/auth/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          items: cartItems,
          totalAmount: totalPrice,
          shippingAddress: address,
          paymentId: "BYPASS_" + Date.now(),
          paymentStatus: "Success",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Order placed using Student Bypass Mode.");
        dispatch(clearCart());
        navigate("/ordersuccess");
      } else {
        alert(data.message || "Unable to save order.");
      }
    } catch (err) {
      console.log(err);
      alert("Bypass payment failed.");
    }
  };

  // -----------------------------
  // RAZORPAY PAYMENT
  // -----------------------------
  const handlePayment = async () => {
    try {
      const orderRes = await fetch("https://shopshpere-ej3z.onrender.com/api/auth/payment/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalPrice,
        }),
      });

      if (!orderRes.ok) {
        const bypass = window.confirm(
          "Payment gateway unavailable.\n\nUse Student Bypass Mode?",
        );

        if (bypass) {
          return bypassPayment();
        }

        return;
      }

      const order = await orderRes.json();

      // Razorpay script missing
      if (!window.Razorpay) {
        alert("Razorpay SDK not loaded.\nUsing bypass mode.");
        return bypassPayment();
      }

      const options = {
        key: order.key || "rzp_test_xxxxxxxxx",

        amount: order.amount,
        currency: order.currency,
        order_id: order.id,

        name: "ShopNest",

        description: "Order Payment",

        prefill: {
          name: address.fullName,
          email: user.email,
          contact: "9999999999",
        },

        theme: {
          color: "#f97316",
        },

        handler: async function (response) {
          try {
            const verifyRes = await fetch("https://shopshpere-ej3z.onrender.com/api/auth/payment/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(response),
            });

            if (!verifyRes.ok) {
              alert("Verification failed.");
              return;
            }

            const saveRes = await fetch("https://shopshpere-ej3z.onrender.com/api/auth/orders", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
              body: JSON.stringify({
                items: cartItems,
                totalAmount: totalPrice,
                shippingAddress: address,
                paymentId: response.razorpay_payment_id,
              }),
            });

            if (saveRes.ok) {
              dispatch(clearCart());
              navigate("/ordersuccess");
            } else {
              alert("Order could not be saved.");
            }
          } catch (err) {
            console.log(err);
          }
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function () {
        const bypass = window.confirm(
          "Payment failed.\n\nPlace order using Student Bypass Mode?",
        );

        if (bypass) {
          bypassPayment();
        }
      });

      razorpay.open();
    } catch (err) {
      console.log(err);

      const bypass = window.confirm(
        "Something went wrong.\n\nUse Student Bypass Mode?",
      );

      if (bypass) {
        bypassPayment();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    handlePayment();
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-content">
        <form onSubmit={handleSubmit} className="shipping-form">
          <h3>Shipping Address</h3>

          <input
            type="text"
            placeholder="Full Name"
            required
            value={address.fullName}
            onChange={(e) =>
              setAddress({ ...address, fullName: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Street"
            required
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
          />

          <input
            type="text"
            placeholder="City"
            required
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
          />

          <input
            type="text"
            placeholder="Postal Code"
            required
            value={address.postalCode}
            onChange={(e) =>
              setAddress({
                ...address,
                postalCode: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Country"
            required
            value={address.country}
            onChange={(e) =>
              setAddress({
                ...address,
                country: e.target.value,
              })
            }
          />

          <div className="checkout-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>

            <button className="btn" type="submit">
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
