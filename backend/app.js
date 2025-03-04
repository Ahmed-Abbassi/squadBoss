const app = require("express")();
const mongoose = require("mongoose");

const player = require("./models/player");
const coach = require("./models/coach");
const playerRouter = require("./routes/playerRouter");
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

//activate json exchange
app.use(require("express").json());


// Routes
app.use(playerRouter);