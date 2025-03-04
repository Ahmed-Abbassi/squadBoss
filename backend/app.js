const app = require("express")();
const mongoose = require("mongoose");

const player = require("./models/player");
const coach = require("./models/coach");

const dotenv = require('dotenv');
dotenv.config();



const MONGO_URI= process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;
//mongoose.set('strictQuery', true);


// Connect App with DataBase
mongoose.connect(MONGO_URI).then(() => {
    console.log("connected to database")
    app.listen(PORT, () => {
        console.log('Server is running on port ', PORT);
    });
}).catch((err) => {
    console.log(err)
});




app.post("/player/signup", (req, res) => {
            let player = req.body;
            let playerObj = new player({
                FullName:player.FullName,
                DateOfBirth:player.DateOfBirth,
                mail:player.mail,
                team:player.team,
                Nationality: player.Nationality,
                pwd:player.pwd    
            })
            playerObj.save();
        })
app.post("/player/login",
    (req, res) => {
        
                player.findOne({ email: req.body.email }).then(
                    (player) => {
                        let playerToSend = {
                            FullName:player.FullName,
                            DateOfBirth:player.DateOfBirth,
                            mail:player.mail,
                            team:player.team,
                            Nationality: player.Nationality,
                            pwd:player.pwd
                        }
                        res.json({ user: playerToSend })
                    }
                )
    })
app.get("/player", (req, res) => {
        player.find().then(
            (docs) => {
                res.json({ playersTable: docs })
            }
        )
    }
    )    
