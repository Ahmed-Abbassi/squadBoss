const express = require("express");
const router = express.Router();
const coachController = require("../controllers/coachController");

router.post("/signup", coachController.signupCoach);
router.post("/login", coachController.loginCoach);
router.get("/", coachController.getAllCoaches);
router.delete("/:_id", coachController.deleteCoach);
router.get("/:_id", coachController.getCoachById);
router.post("/addCoach", coachController.addCoach);
router.put("/:_id", coachController.updateCoach);

module.exports = router;
