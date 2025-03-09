// import mongoose module
const mongoose = require("mongoose");
// create user schema (attributes)
const coachSchema = mongoose.Schema({
_id:String,
FullName:String,
Nationality:String,
DateOfBirth:String,
Age:Number,
Height:Number,
ContractUntil:String,
JoinedOn:String,
price:Number
})
// create model(PascalCase)
const coach=mongoose.model("coach",coachSchema);
module.exports = coach;