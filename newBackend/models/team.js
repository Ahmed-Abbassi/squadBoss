const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  coach: { type: mongoose.Schema.Types.ObjectId, ref: 'coach' },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'player' }]
});

module.exports = mongoose.model('team', teamSchema); 
