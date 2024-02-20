const express = require("express");
const router = express.Router();
const orders = require("../models/orders");

router.get("/all",async(req,res) => {
    try{
        const pastOrders = await orders.find();
        res.status(200).json({
            pastOrders
        })
    }catch(e){
        res.status(400).json({
            error:e.message
        })
    }
})

module.exports = router;