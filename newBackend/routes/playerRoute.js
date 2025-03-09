const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

router.post("/signup", playerController.signupPlayer);
router.post("/login", playerController.loginPlayer);
router.get("/", playerController.getAllPlayers);
router.delete("/:_id", playerController.deletePlayer);
router.get("/:_id", playerController.getPlayerById);
router.post("/addPlayer", playerController.addPlayer);
router.put("/:_id", playerController.updatePlayer);
router.get("/:_id/predict", playerController.predictPlayerPerformance);

module.exports = router;
