const mongoose = require("mongoose");
const ordersSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
    order: { type: Array, require: true },

    storeLoctaion: { type: String },
    storeCite: { type: String },
    storePhoneNumber: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", ordersSchema);
