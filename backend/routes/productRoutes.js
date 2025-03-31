import express from "express";
import Product from "../models/ProductModel.js";

const router = express.Router();

// Get All Products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add Product
router.post("/", async (req, res) => {
  const { name, price, image, description } = req.body;
  const product = new Product({ name, price, image, description });

  try {
    await product.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to add product" });
  }
});

export default router;
