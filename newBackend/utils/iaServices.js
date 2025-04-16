const axios = require('axios');

// Send player data to AI model and get prediction
exports.sendPlayerDataToIA = async (playerData) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/predict', playerData);
       setTimeout(() => {
            console.log("AI response:", response);
        }, 5000); // Log AI response after 1 second delay
        return response.data.prediction;
        
    } catch (error) {
        console.error('Error sending data to AI:', error);
        throw new Error('Error connecting with AI');
    }
};

// Transform player data for AI model
exports.transformPlayerData = (player) => ({
    _id: player._id.toString(),
    FullName: player.FullName,
    Age: player.Age,
    Potential: player.Potential,
    "Height(in cm)": player.Height,
    "Shooting Total": parseInt(player.ShootingTotal),
    "Passing Total": parseInt(player.PassingTotal),
    "Dribbling Total": parseInt(player.DribblingTotal),
    "Defending Total": parseInt(player.DefendingTotal)
});
