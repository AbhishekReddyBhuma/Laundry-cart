const express = require("express");
const router = express.Router();
const orders = require("../models/orders");

router.get("/all", async (req, res) => {
  try {
    const pastOrders = await orders.find();
    res.status(200).json({
      pastOrders,
    });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

router.post("/create/order", async (req, res) => {
  const { productsName, serviceType, quantity, finalAmount, pickUpCharge } =
    req.body;
  try {
    const order = await orders.create({
      productsName,
      serviceType,
      quantity,
      finalAmount,
      pickUpCharge,
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = router;
