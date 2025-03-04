const Models = require("../models/index");


const getAllPlayers =async  (req, res)=>{
    try {
        const products = await Models.player.find({});
        await res.status(200).json(products);
      } catch (error) {
        res.send("error:", error.message);
      }
}

  

const createNewPlayer = async(req, res)=>{

    try{
        
        const player = Models.player.create(req.body);
        await res.status(201).json({message :"player created successfully"});
    }catch(error){
        res.status(200).json({message: error.message});
    }

}

module.exports= {getAllPlayers, createNewPlayer}