const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Users = require("../models/users");
const verifyToken = require("../middleware/verifyToken");
const secret_key = "ABC";

router.post("/register", async (req, res) => {
  console.log(req.body.address);
  const { name, email, password, phoneNumber } = req.body.data;

  try {
    const userExist = await Users.findOne({ email });
    if (userExist) {
      res.status(400).json({ message: "email is already registered" });
    } else {
      const securePassword = await bcrypt.hash(password, 10);
      const user = await Users.create({
        name,
        email,
        password: securePassword,
        phoneNumber,
        address: req.body.address,
      });
      const data = { user: user.id };
      const token = jwt.sign(data, secret_key);
      res.status(200).json({
        message: "Registration successful.Please Sign in now",
        token,
        user,
      });
    }
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password, phoneNumber } = req.body;
  try {
    const userExist = phoneNumber
      ? await Users.findOne({ phoneNumber })
      : await Users.findOne({ email });

    if (!userExist) {
      res.status(400).json({ message: "credentials invalid" });
    } else {
      const comparePassword = await bcrypt.compare(
        password,
        userExist.password
      );

      if (!comparePassword) {
        res.status(400).json({ message: "invalid password" });
      } else {
        const data = { user: userExist.id };
        const token = jwt.sign(data, secret_key);
        res
          .status(200)
          .json({ message: "login successfull", token, name: userExist.name });
      }
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.put("/newaddress", verifyToken, async (req, res) => {
  try {
    const { newAddress } = req.body;
    console.log(newAddress);
    const user = await Users.findByIdAndUpdate(
      { _id: req.user },
      { newAddress }
    );
    res.status(200).json({ message: "new address added sucessfully", user });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.get("/fetchaddress", verifyToken, async (req, res) => {
  try {
    const address = await Users.findOne({ _id: req.user }, "address");
    res.status(200).json(address);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
