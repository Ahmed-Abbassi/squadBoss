const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();



const MONGO_URI= process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
console.log("Server running on port:", PORT);

const app = express();
mongoose.connect(MONGO_URI).then(()=>{
    console.log("connected to database")
    app.listen(PORT, () => {
        console.log('Server is running on port ', PORT);
    });
}).catch((err)=>{
    console.log(err)
})
app.get('/', (req, res) => {    
    res.send('Hello World');
});
