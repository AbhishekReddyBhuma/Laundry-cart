const express = require("express");
const router = express.Router();
const Orders = require("../models/orders");

router.get("/all", async (req, res) => {
  try {
    const pastOrders = await Orders.find();
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
  const { order, storeLoctaion, storeCity, storePhoneNumber } = req.body;
  try {
    const orders = await Orders.create({
      order,
      storeLoctaion,
      storeCity,
      storePhoneNumber,
      userId: req.user,
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = router;
