const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
const URL = "mongodb://localhost:27017/Laundry-cart";
const userroute = require("./routes/userRoute");
app.use(express.json());
app.use("/users",userroute);


mongoose.connect(URL).then(console.log("Connected"));

app.listen(PORT,() => console.log(`App listening on ${PORT}`));


