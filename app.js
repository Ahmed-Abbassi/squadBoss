const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


// Connect App with DataBase
mongoose.connect('mongodb://localhost:27017/footballCoachingDB');

const app = express();
module.exports = app;
const player = require("./models/player");
const coach = require("./models/coach");

app.post("/player/signup", (req, res) => {
            let player = req.body;
            let playerObj = new player({
                FullName:player.FullName,
                DateOfBirth:player.DateOfBirth,
                mail:player.mail,
                team:player.team,
                Nationality: player.Nationality    
            })
            playerObj.save();
        })
