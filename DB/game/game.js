const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GameSchema = new Schema({
    teamName:{
        type: String,
        unique: true
        },
    password: {
        type: String
    }
    
});

const Game = mongoose.model('Game', GameSchema);
module.exports = Game;