const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const URL = "mongodb+srv://Abhishek:Abhishek@cluster0.mjob4sx.mongodb.net/Laundry-cart?retryWrites=true&w=majority&appName=Cluster0";
const userroute = require("./routes/userRoute");
const ordersRoute = require("./routes/orders");
const productsRoute = require("./routes/product");
const newAddersRoute = require("./routes/newAddresRoute");
const verifyToken = require("./middleware/verifyToken");

app.use(express.json());
app.use(cors());
app.use("/users", userroute);

app.use("/orders", verifyToken, ordersRoute);
app.use("/api", productsRoute);
app.use("/api", verifyToken, newAddersRoute);

mongoose.connect(URL).then(console.log("Connected"));

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
