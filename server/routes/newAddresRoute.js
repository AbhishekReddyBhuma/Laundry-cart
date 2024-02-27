const express = require("express");
const NewAddress = require("../models/newAddresModel");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.post("/add", verifyToken, async (req, res) => {
  try {
    const { address} = req.body;
    console.log(req.body)
    const newAddress = await NewAddress.create({
      userId: req.user,
      address,
    });
    res
      .status(200)
      .json({ message: "sucessfully added new address", newAddress });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getaddress", verifyToken,async (req, res) => {
  try {
    const AllAdress = await NewAddress.find({ userId: req.user }).populate(
      "userId",
      "address"
    );
    res.status(200).json(AllAdress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    const { address, state, district, pinCode } = req.body;
    const updateAddress = await NewAddress.findByIdAndUpdate(
      { _id: req.params.id },
      { address, state, district, pinCode }
    );
    res.status(200).json(updateAddress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deleteAddress = await NewAddress.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json({ message: "deleted sucessfully", deleteAddress });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
