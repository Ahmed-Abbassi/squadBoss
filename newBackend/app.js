const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const app = express();
const playerRoutes = require("./routes/playerRoute");
const coachRoutes = require("./routes/coachRoute");

PORT= 5000
MONGO_URI= "mongodb+srv://abbassia082:WmQyW1i2EdGUZLZh@squadboss.3wbxs.mongodb.net/?retryWrites=true&w=majority&appName=squadBoss"


mongoose.connect(MONGO_URI).then(()=>{
    console.log("connected to database")

}).catch((err)=>{
    console.log(err)
})
// Middleware
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH, PUT");
    next();
});

app.use("/player", playerRoutes);
app.use("/coach", coachRoutes);
module.exports = app;
