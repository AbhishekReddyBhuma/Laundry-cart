const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  product_name: String,
  description: String,
  washing_price: Number,
  ironing_price: Number,
  towel_price: Number,
  bleach_price: Number,
});

module.exports = mongoose.model("Products", productSchema);
