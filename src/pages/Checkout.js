import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (!address) {
      alert("Please enter your address.");
      return;
    }

    // Simulate order placement
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div>
      <h1>Checkout</h1>
      {orderPlaced ? (
        <h2>Thank you for your order! 🎉</h2>
      ) : (
        <>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <div>
            <label>Shipping Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
            />
          </div>
          <div>
            <label>Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>
          <button onClick={handleOrder}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
