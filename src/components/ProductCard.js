import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <Link to={`/product/${product.id}`} style={styles.button}>
        View Details
      </Link>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    width: "200px",
    margin: "10px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  button: {
    display: "block",
    marginTop: "10px",
    padding: "5px",
    background: "#333",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "3px",
  },
};

export default ProductCard;
