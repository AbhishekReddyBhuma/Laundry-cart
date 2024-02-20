const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../models/users");

router.post("/register",async(req,res) => {
    console.log(req.body)
    const {name,email,password,phoneNumber,address,state,district,pinCode} = req.body;
    try{
        const securePassword = await bcrypt.hash(password,10)
        const user = await users.create({
            name,email,
            password:securePassword,
            phoneNumber,address,state,district,pinCode
        })
        res.status(200).json({
            message:"Registration successful"
        })
    }catch(e){
        res.status(400).json({
            error:e.message
        })
    }
})

router.post("/signIn",(req,res) => {
    res.send("SignIn page");
})

module.exports = router;