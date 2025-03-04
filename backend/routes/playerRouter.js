const Router = require('express').Router;
const playerRouter = Router();
const playerController = require("../controllers/playerController")
//get all players
playerRouter.get("/player",playerController.getAllPlayers)

//create a player
playerRouter.post("/player", playerController.createNewPlayer)


module.exports= playerRouter;