// import mongoose module
const mongoose = require("mongoose");
const objectId = mongoose.objectId;
// create user schema (attributes)
const playerSchema = new mongoose.Schema({

FullName:String,
Overall:Number,
Potential:Number,
PositionsPlayed:String,
BestPosition:String,
Nationality:String,
Age:Number,
Height:Number,
ClubPosition:String,
ContractUntil:String,
JoinedOn:String,
PreferredFoot:String,
NationalTeamJersey: Number,
AttackingWorkRate:String,
DefensiveWorkRate:String,
ShootingTotal:String,
PassingTotal:String,
DribblingTotal:String,
DefendingTotal:String,
DateOfBirth:Date,
mail:String,
team:String,
pwd:String,
price:Number
})
// create model(PascalCase)
const player=mongoose.model("player",playerSchema);
module.exports = player;