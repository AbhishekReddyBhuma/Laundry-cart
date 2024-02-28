const mongoose = require("mongoose");
const newaddressSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  address: {
    address: String,
    state: String,
    district: String,
    pinCode: String,
    phoneNumber: String,
    title:String
  },
});
const newAddressModel = mongoose.model("newaddres", newaddressSchema);
module.exports = newAddressModel;
