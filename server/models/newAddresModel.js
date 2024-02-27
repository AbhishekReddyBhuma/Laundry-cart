const mongoose = require("mongoose");
const newaddressSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  address: String,
  state: String,
  district: String,
  pinCode: String,
});
const newAddressModel = mongoose.model("newaddres", newaddressSchema);
module.exports = newAddressModel;
