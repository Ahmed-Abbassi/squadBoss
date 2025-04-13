// Import mongoose module
const mongoose = require("mongoose");

// Create player schema with camelCase field names
const playerSchema = new mongoose.Schema({
  fullName: String,
  overall: Number,
  potential: Number,
  positionsPlayed: String,
  bestPosition: String,
  Nationality: String,
  age: Number,
  height: Number,
  clubPosition: String,
  contractUntil: String,
  joinedOn: String,
  preferredFoot: String,
  nationalTeamJersey: Number,
  attackingWorkRate: String,
  defensiveWorkRate: String,
  shootingTotal: String,
  passingTotal: String,
  dribblingTotal: String,
  defendingTotal: String,
  dateOfBirth: String,
  email: String,
  team: String,
  pwd: String,
  price: Number
}, { collection: 'players' }); // Optional: Specify collection name if different

// Create and export the Player model
const Player = mongoose.model("Player", playerSchema);
module.exports = Player;
