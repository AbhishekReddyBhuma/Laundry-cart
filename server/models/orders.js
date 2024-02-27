const mongoose = require("mongoose");
const ordersSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
    order: { type: Array, require: true },

    storeLoctaion: { type: String },
    storeCity: { type: String },
    storePhoneNumber: { type: String },
    userAddress:{type:String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", ordersSchema);
