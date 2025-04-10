require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const app = express();
const PORT = process.env.PORT || 3001; // <-- Added PORT definition

const playerRoutes = require("./routes/playerRoute");
const coachRoutes = require("./routes/coachRoute");

// Replace with your own valid URI and credentials
const uri = process.env.MONGODB_URI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("✅ Connected to the Database successfully");
    app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB Atlas connection error:', err));

// Middleware to parse JSON
app.use(express.json());

// CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH, PUT");
  next();
});

// API routes
app.use("/player", playerRoutes);
app.use("/coach", coachRoutes);

// Export app (for testing or other use)
module.exports = app;
