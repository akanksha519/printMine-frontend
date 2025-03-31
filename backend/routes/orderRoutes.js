import express from "express";
import Order from "../models/OrderModel.js";

const router = express.Router();

// Place an Order
router.post("/", async (req, res) => {
  const { userId, items, totalAmount } = req.body;
  const order = new Order({ userId, items, totalAmount });

  try {
    await order.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    res.status(400).json({ error: "Order placement failed" });
  }
});

export default router;
