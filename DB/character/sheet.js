const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SheetSchema = new Schema({
    gameId:{
        type: String
    },
    strength:{
        type: Number,
        required: true
        },
    dexterity: {
        type: Number,
        required: true
    },
    constitution: {
        type: Number,
    },
    intelligence:{
        type: Number,
    },
    wisdom:{
        type: Number,
        required: true
    },
    charisma: {
        type: Number
    },
    class:{
        type: String
    },
    level: {
        type: Number,
        required: true,
        defaul: 1
    },
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    alignment: {
        type: String,
        required: true
    },
    exp: {
        type: Number,
        default: 0
    },
    inspiration:{
        type: Number,
        default: 0
    },
    proficency: {
        type: Number,
        default: 0
    },
    aClass: {
        type: Number
    },
    inititave: {
        type: Number,
        default: 0
    },
    speed: {
        type: Number,
        default: 0
    }

});

const Sheet = mongoose.model('Sheet', SheetSchema);
module.exports = Sheet;