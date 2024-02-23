const express = require("express");
const Products = require("../models/productsModel");
const router = express.Router();

router.get("/fetchproducts", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
module.exports = router;
