const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const frameSchema = new Schema({
    input: {type: String, required: true},
    level: {type: String},
    damage: {type: Number},
    startup: {type: Number},
    onBlock: {type: Number},
    onHit: {type: String},
    counter: {type: String},
    notes: {type: String},
    gif: {type: String}
});

const Frame = mongoose.model("Frame", frameSchema);

module.exports = Frame;