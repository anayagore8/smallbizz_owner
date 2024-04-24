require('dotenv').config();
const express = require('express');
const app = express();
const cors= require("cors");
const connection=require("./db")
const shopRoutes=require("./routes/shop.js");
const authRoutes=require("./routes/auth.js");

connection();
app.use(cors());
app.use(express.json());


app.use("/api/shops",shopRoutes);
app.use("/api/auth",authRoutes);

const port=8000;
app.listen(port,()=>console.log("server is running on port 8000"))
