const mongoose = require("mongoose");
const UsersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true, 
    },
    district: {
        type: String,
        required: true, 
    },
    pinCode: {
        type: String,
        required: true, 
    }
})

module.exports = mongoose.model("Users",UsersSchema);