const Coach = require("../models/coach");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;

// Sign Up Coach
exports.signupCoach = (req, res) => {
    bcrypt.hash(req.body.pwd, 10).then(cryptedPwd => {
        const coach = new Coach({ ...req.body, pwd: cryptedPwd });
        coach.save()
            .then(() => res.status(201).json({ message: "Coach registered successfully!" }))
            .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
    });
};

// Login Coach
exports.loginCoach = async (req, res) => {
    const { email, pwd } = req.body;
  
    if (!email || !pwd) {
      return res.status(200).json({ "error": 'Email and password are required' });
    }
  
    const coach = await Coach.findOne({ email });
    if (!coach) {
      console.log("coach not found:", email);
      return res.status(404).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(pwd, coach.pwd);
        if (!passwordMatch) {
            return res.status(200).json({ "error": 'Invalid credentials' });
        }

        else{
            const token = jwt.sign(
                { coachId: coach._id }, 
                SECRET_KEY,
                { expiresIn: '1h' }
            );
            res.status(200).json({ 
                token,
                coachId: coach._id,
                email: coach.email
            });
        }

  };
  
  
    /*Coach.findOne({ email: req.body.email })
        .then(coach => {
            if (!coach) return res.json({ message: "0" }); // Invalid email
            return bcrypt.compare(req.body.pwd, coach.pwd).then(isValid => {
                if (!isValid) return res.json({ message: "1" }); // Invalid password
                const coachData = { ...coach.toObject(), pwd: undefined };  // Removing password from response
                res.json({ message: "2", coach: coachData });
            });
        })
        .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
};
*/

//coach :
/*
exports.loginCoach = async (req, res) => {
    try {
        const { email, pwd } = req.body;
        
        if (!email || !pwd) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const coach = await coach.findOne({ email });
        if (!coach) {
            console.log("coach not found:", email);
            
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const passwordMatch = await bcrypt.compare(pwd, coach.pwd);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { coachId: coach._id }, 
            process.env.SECRET_KEY || 'development-secret',
            { expiresIn: '1h' }
        );

        res.status(200).json({ 
            token,
            coachId: coach._id,
            email: coach.email
        });
        
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ 
            error: 'Login failed',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};
  
 */


// Get all Coaches
exports.getAllCoaches = (req, res) => {
    Coach.find()
        .then(coaches => res.json({ coachesTable: coaches }))
        .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
};

// Delete Coach by ID
exports.deleteCoach = (req, res) => {
    Coach.deleteOne({ _id: req.params._id })
        .then(result => result.deletedCount ? res.json({ message: `Coach ${req.params._id} is deleted` }) : res.status(404).json({ message: "Coach not found" }))
        .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
};

// Get Coach by ID
exports.getCoachById = (req, res) => {
    Coach.findById(req.params._id)
        .then(coach => coach ? res.json({ coach }) : res.status(404).json({ message: "Coach not found" }))
        .catch(err => res.status(500).json({ error: "Internal server error", details: err.message }));
};

// Add a Coach
exports.addCoach = (req, res) => {
    const coach = new Coach(req.body);
    coach.save()
        .then(() => res.json({ message: "Coach added successfully" }))
        .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
};

// Update a Coach
exports.updateCoach = (req, res) => {
    Coach.updateOne({ _id: req.params._id }, req.body)
        .then(result => result.modifiedCount ? res.json({ message: "Coach updated successfully" }) : res.json({ message: "No changes made" }))
        .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
};
