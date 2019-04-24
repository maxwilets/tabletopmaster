const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SkillSchema = new Schema({
    acrobatics:{
        type: Number,
        default: 0
        },
    animalHandle: {
        type: Number,
        default: 0
    },
    arcana: {
        type: Number,
        default: 0
    },
    athletics:{
        type: Number,
        default: 0
     },
    deception:{
        type: Number,
        default: 0
    },
    history: {
        type: Number,
        default: 0
    },
    insight: {
        type: Number,
        default: 0
    },
    indimidation: {
        type: Number,
        default: 0
    },
    investigate: {
        type: Number,
        default: 0
    },
    medicine: {
        type: Number,
        default: 0
    },
    nature: {
        type: Number,
        default: 0
    },
    perception: {
        type: Number,
        default: 0
    },
    performance: {
        type: Number,
        default: 0
    },
    persuation: {
        type: Number,
        default: 0
    },
    religion: {
        type: Number,
        default: 0
    },
    sleight: {
        type: Number,
        default: 0
    },
    stealth: {
        type: Number,
        default: 0
    },
    survival: {
        type: Number,
        default: 0
    }
});

const Skill = mongoose.model('Skill', SkillSchema);
module.exports = Skill;