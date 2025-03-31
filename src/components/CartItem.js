import React from "react";

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div style={styles.cartItem}>
      <img src={item.image} alt={item.title} style={styles.image} />
      <div style={styles.details}>
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <div>
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span style={styles.quantity}>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          style={styles.removeButton}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const styles = {
  cartItem: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    padding: "10px",
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    marginRight: "15px",
  },
  details: {
    flex: 1,
  },
  quantity: {
    margin: "0 10px",
    fontWeight: "bold",
  },
  removeButton: {
    marginTop: "10px",
    padding: "5px",
    background: "red",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default CartItem;
