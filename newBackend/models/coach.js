// import mongoose module
const mongoose = require("mongoose");
// create user schema (attributes)
const coachSchema = mongoose.Schema({
_id:String,
FullName:{ type: String, unique: false, required: true },
Nationality:String,
DateOfBirth:String,
Age:Number,
Height:Number,
ContractUntil:String,
JoinedOn:String,
email: String,
price:Number,
pwd: {type: String, required: true },
})
// create model(PascalCase)
const coach=mongoose.model("coach",coachSchema);
module.exports = coach;