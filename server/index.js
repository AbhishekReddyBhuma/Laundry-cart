const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
const URL = "mongodb+srv://Abhishek:Abhishek@cluster0.mjob4sx.mongodb.net/Laundry-cart?retryWrites=true&w=majority&appName=Cluster0";
const userroute = require("./routes/userRoute");
const ordersRoute = require("./routes/orders");
const productsRoute = require("./routes/product");
const newAddersRoute = require("./routes/newAddresRoute");
const verifyToken = require("./middleware/verifyToken");

app.get("/", (req, res) => {
    app.use(express.static(path.resolve( __dirname, "laundry-cart", "dist")));
     res.sendFile(path.resolve( __dirname, "laundry-cart", "dist", "index.html"));
    });

app.use(express.json());
app.use(cors());
app.use("/users", userroute);

app.use("/orders", verifyToken, ordersRoute);
app.use("/api", productsRoute);
app.use("/api", verifyToken, newAddersRoute);

mongoose.connect(URL).then(console.log("Connected"));

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
