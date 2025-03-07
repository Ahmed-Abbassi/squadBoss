const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const bcrypt = require("bcrypt");



// Connect App with DataBase
mongoose.connect('mongodb://localhost:27017/footballCoachingDB');

const app = express();
app.use(express.json());
module.exports = app;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});



/*********** Business Logic : PLAYER ***********/
const Player = require("./models/player");

    // SIGNUP PLAYER ()
app.post("/player/signup", (req, res) => {
    bcrypt.hash(req.body.pwd, 10).then(
        (cryptedPwd) => {
            let player = req.body;
            let playerObj = new Player({
                _id:player._id,
                FullName:player.FullName,
                DateOfBirth:player.DateOfBirth,
                email:player.email,
                team:player.team,
                Nationality: player.Nationality,
                pwd:cryptedPwd  
            })
            playerObj.save().then((player) => {
                res.status(201).json({
                    message: "Player registered successfully!",
                });
            })           
        })
    })
    // LOGIN PLAYER ()
    app.post("/player/login", (req, res) => {
        Player.findOne({ email: req.body.email }).then(
            (responseEmail) => {
                if (!responseEmail) {
                    // invalid email
                    return res.json({ message: "0" });
                }
                return bcrypt.compare(req.body.pwd, responseEmail.pwd).then(
                    (responsePwd) => {
                        if (!responsePwd) {
                            // invalid password
                            return res.json({ message: "1" });
                        }
                        let playerToSend = {
                            _id: responseEmail._id,
                            FullName: responseEmail.FullName,
                            DateOfBirth: responseEmail.DateOfBirth,
                            email: responseEmail.email,
                            team: responseEmail.team,
                            Nationality: responseEmail.Nationality
                        };
                        res.json({ message: "2", player: playerToSend });
                    }
                );
            }
        ).catch((err) => {
            res.status(500).json({ error: "Internal server error", details: err });
        });
    });    
    // GET ALL PLAYERS ()  
app.get("/player", (req, res) => {
        Player.find().then(
            (docs) => {
                res.json({ playersTable: docs })
            }
        )
    })  
    // DELETE PLAYER BY ID ()
app.delete("/player/:_id",
    (req, res) => {
        Player.deleteOne({ _id: req.params._id }).then(
            (data) => {
                if (data.deletedCount == 1) {
                    res.json({ message: `player ${req.params._id} is deleted` })
                }
            }
        )
    })  
    // GET PLAYER BY ID ()
app.get("/player/:_id", (req, res) => {
    Player.findOne({ _id: req.params._id }).then(
        (doc) => {
            res.json({ player : doc })
            }
        )
    })
    // REQUEST ADD A PLAYER
app.post("/addPlayer", (req, res) => {
    let player = req.body
    let playerObj = new Player({
        _id:player._id,
                FullName:player.FullName,
                DateOfBirth:player.DateOfBirth,
                email:player.email,
                team:player.team,
                Nationality: player.Nationality,
                pwd:player.pwd 
    })
    playerObj.save();
    res.json({ message: "player added" })
    })
    // UPDATE A PLAYER ()
app.put("/player/:_id", (req, res) => {
    Player.updateOne({ _id: req.params._id }, req.body).then((data) => {
        if (data.modifiedCount === 1) {
            res.json({ message: "Player updated successfully" });
        } else {
            res.json({ message: "No changes made to the player" });
        }
    })
})

/***********  Business Logic : COACH ***********/
const Coach = require("./models/coach");

    // SIGNUP COACH ()
app.post("/coach/signup", (req, res) => {
    bcrypt.hash(req.body.pwd, 10).then(
        (cryptedPwd) => {
            let coach = req.body;
            let coachObj = new Coach({
                _id:coach._id,
                FullName:coach.FullName,
                DateOfBirth:coach.DateOfBirth,
                email:coach.email,
                team:coach.team,
                Nationality: coach.Nationality,
                pwd:cryptedPwd  
            })
            coachObj.save().then((coach) => {
                res.status(201).json({
                    message: "coach registered successfully!",
                });
            })           
        })
    })
    // LOGIN COACH ()
app.post("/coach/login", (req, res) => {
    coach.findOne({ email: req.body.email }).then(
        (responseCoach) => {
            if (!responseCoach) {
                // invalid email
                return res.json({ message: "0" });
            }
            return bcrypt.compare(req.body.pwd, responseCoach.pwd).then(
                (responseCoachPwd) => {
                    if (!responseCoachPwd) {
                        // invalid password
                        return res.json({ message: "1" });
                    }
                    let coachToSend = {
                        _id: responseCoach._id,
                        FullName: responseCoach.FullName,
                        DateOfBirth: responseCoach.DateOfBirth,
                        email: responseCoach.email,
                        team: responseCoach.team,
                        Nationality: responseCoach.Nationality
                    };
                    res.json({ message: "2", coach: coachToSend });
                }
            );
        }
    ).catch((err) => {
        res.status(500).json({ error: "Internal server error", details: err });
    });
}); 
    // GET ALL COACHES ()  
app.get("/coach", (req, res) => {
Coach.find().then(
    (docs) => {
        res.json({ coachesTable: docs })
    }
)
}) 
    // DELETE COACH BY ID ()
app.delete("/coach/:_id",
    (req, res) => {
        Coach.deleteOne({ _id: req.params._id }).then(
            (data) => {
                if (data.deletedCount == 1) {
                    res.json({ message: `coach ${req.params._id} is deleted` })
                }
            }
        )
    })  
    // REQUEST ADD A COACH
app.post("/addCoach", (req, res) => {
    let coach = req.body
    let coachObj = new Coach({
        _id:coach._id,
                FullName:coach.FullName,
                DateOfBirth:coach.DateOfBirth,
                email:coach.email,
                team:coach.team,
                Nationality: coach.Nationality,
                pwd:coach.pwd 
    })
    coachObj.save();
    res.json({ message: "coach added" })
    })

/***********  Business Logic : TEAM ***********/




const axios = require('axios'); s

async function sendPlayerDataToIA(playerData) {
    try {
        const response = await axios.post('http://127.0.0.1:5000/predict', playerData);
        const prediction = response.data.prediction;
        return prediction;
    } catch (error) {
        console.error('Error sending data to the AI:', error);
        throw new Error('Error connecting with the AI');
    }
}

function transformPlayerData(player) {
    return {
        _id: player._id.toString(), 
        FullName: player.FullName,
        Age: player.Age,
        Potential: player.Potential,
        "Height(in cm)": player.Height,
        "Shooting Total": parseInt(player.ShootingTotal),
        "Passing Total": parseInt(player.PassingTotal),
        "Dribbling Total": parseInt(player.DribblingTotal),
        "Defending Total": parseInt(player.DefendingTotal)
    };
}

app.get("/player/:_id/predict", async (req, res) => {
    try {

        const id = req.params._id;

        let player;
       
        try {
            player = await Player.findById(id);
        } catch {
            return res.status(404).json({ message: "Player not found" });
        }
        const prediction = await sendPlayerDataToIA(transformPlayerData(player));
        res.json({ player: player.FullName, prediction: prediction });
    } catch (err) {
        res.status(500).json({ error: "Internal server error", details: err.message });
    }
});

