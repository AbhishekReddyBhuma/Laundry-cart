const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = require("../models/users");
const secret_key = "ABC";

router.post("/register", async (req, res) => {
  //   console.log(req.body);
  const {
    name,
    email,
    password,
    phoneNumber,
    address,
    state,
    district,
    pinCode,
  } = req.body;
  try {
    const userExist = await users.findOne({ email });
    if (userExist) {
      res.status(400).json({ message: "email is already register" });
    } else {
      const securePassword = await bcrypt.hash(password, 10);
      const user = await users.create({
        name,
        email,
        password: securePassword,
        phoneNumber,
        address,
        state,
        district,
        pinCode,
      });
      const data = { user: user.id };
      const token = jwt.sign(data, secret_key);
      res.status(200).json({
        message: "Registration successful",
        token,
      });
    }
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await users.findOne({ email });
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
        res.status(200).json({ message: "login succesfull", token });
      }
    }
  } catch (error) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = router;
