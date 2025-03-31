import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    // Mock API call (Replace with actual API)
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Filtered and sorted products
  const filteredProducts = products
    .filter((product) => (filter ? product.category.includes(filter) : true))
    .sort((a, b) =>
      sort === "price-asc"
        ? a.price - b.price
        : sort === "price-desc"
        ? b.price - a.price
        : 0
    );

  return (
    <div>
      <h1>Products</h1>
      <div>
        <label>Filter by Category: </label>
        <input
          type="text"
          placeholder="Enter category"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div>
        <label>Sort by Price: </label>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">None</option>
          <option value="price-asc">Low to High</option>
          <option value="price-desc">High to Low</option>
        </select>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
