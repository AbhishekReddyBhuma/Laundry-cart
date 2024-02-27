const mongoose = require("mongoose");
const UsersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    address: {
      address: String,
      state: String,
      district: String,
      pinCode: String,
      title:{type:String,default:"Home"}
    },
    newAddress: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UsersSchema);
