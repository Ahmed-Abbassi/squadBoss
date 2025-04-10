// import mongoose module
const mongoose = require("mongoose");
// create user schema (attributes)
const playerSchema = mongoose.Schema({
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
DateOfBirth:String,
email:String,
team:String,
pwd:String,
price:Number
})
// create model(PascalCase)
const player=mongoose.model("Player",playerSchema);
module.exports = player;