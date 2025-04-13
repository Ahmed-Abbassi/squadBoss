const Player = require("../models/player");
const bcrypt = require("bcrypt");
const { sendPlayerDataToIA, transformPlayerData } = require("../utils/iaServices");

// Sign Up Player
exports.signupPlayer = (req, res) => {
    bcrypt.hash(req.body.pwd, 10).then(cryptedPwd => {
        const player = new Player({ ...req.body, pwd: cryptedPwd });
        player.save()
            .then(() => res.status(201).json({ message: "Player registered successfully!" }))
            .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
    });
};

// Login Player
exports.loginPlayer = (req, res) => {
    Player.findOne({ email: req.body.email })
        .then(player => {
            if (!player) return res.json({ message: "0" });
            return bcrypt.compare(req.body.pwd, player.pwd).then(isValid => {
                if (!isValid) return res.json({ message: "1" });
                const playerData = { ...player.toObject(), pwd: undefined };  // Removing password from response
                res.json({ message: "2", player: playerData });
            });
        })
        .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
};

exports.getAllPlayers = async (req, res) => {
    console.log("Incoming query params:", req.query); // ← LOG HERE

    const { Nationality } = req.query;

    try {
        let players;
        if (Nationality) {
            console.log("Searching for players with Nationality:", Nationality);
            players = await Player.find({Nationality });

        } else {
            console.log("Fetching all players");
            players = await Player.find();
        }

        res.status(200).json(players);
    } catch (error) {
        console.error('Error fetching players:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete Player by ID
exports.deletePlayer = (req, res) => {
    Player.deleteOne({ _id: req.params._id })
        .then(result => result.deletedCount ? res.json({ message: `Player ${req.params._id} is deleted` }) : res.status(404).json({ message: "Player not found" }))
        .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
};

// Get Player by ID
exports.getPlayerById = (req, res) => {
    Player.findById(req.params._id)
        .then(player => player ? res.json({ player }) : res.status(404).json({ message: "Player not found" }))
        .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
};

// Add a Player
exports.addPlayer = (req, res) => {
    const player = new Player(req.body);
    player.save()
        .then(() => res.json({ message: "Player added successfully" }))
        .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
};

// Update a Player
exports.updatePlayer = (req, res) => {
    Player.updateOne({ _id: req.params._id }, req.body)
        .then(result => result.modifiedCount ? res.json({ message: "Player updated successfully" }) : res.json({ message: "No changes made" }))
        .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
};

// Predict Player Performance using AI
exports.predictPlayerPerformance = async (req, res) => {
    try {
        const player = await Player.findById(req.params._id);
        if (!player) return res.status(404).json({ message: "Player not found" });
        const prediction = await sendPlayerDataToIA(transformPlayerData(player));
        res.json({ player: player.FullName, prediction });
    } catch (err) {
        res.status(500).json({ error: "Internal server error", details: err.message });
    }
};
