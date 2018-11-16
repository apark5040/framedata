const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String},
    frames: [{type: Schema.Types.ObjectId, ref: "Frame"}]
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;