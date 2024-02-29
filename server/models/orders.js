const mongoose = require("mongoose");
const ordersSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
    order: { type: Array, require: true },

    storeLocation: { type: String },
    storeAddress:{ type: String },
    storeCity: { type: String },
    storePhoneNumber: { type: String },
    userAddress: { type: String },
    status: {
      type: String,
      default: "In Processing",
    },
    finalQuantity: String,
    date: { type: Date, default: Date.now() },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Orders", ordersSchema);
