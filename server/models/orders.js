const mongoose = require("mongoose");
const ordersSchema = mongoose.Schema({
  productsName: {
    type: Array,
  },
  serviceType: {
    type: Object,
  },
  quantity: {
    type: Array,
  },
  totalQuantity: {
    type: Number,
  },
  finalAmount: {
    type: Number,
  },
  pickUpCharge: {
    type: Number,
  },
  totalAmount: { type: Number },
  storeLoctaion: { type: String },
  storeCite: { type: String },
  storePhoneNumber: { type: Number },
});

module.exports = mongoose.model("Orders", ordersSchema);
