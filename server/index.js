const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
const URL = "mongodb://localhost:27017/Laundry-cart";
const userroute = require("./routes/userRoute");
const ordersRoute = require("./routes/orders");
const productsRoute = require("./routes/product");

app.use(express.json());
app.use(cors());
app.use("/users", userroute);

app.use("/orders", ordersRoute);
app.use("/api", productsRoute);

mongoose.connect(URL).then(console.log("Connected"));

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
