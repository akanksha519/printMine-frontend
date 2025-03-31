import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to PrintMine Clone</h1>
      <p>Discover custom-printed products for every occasion.</p>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default Home;
