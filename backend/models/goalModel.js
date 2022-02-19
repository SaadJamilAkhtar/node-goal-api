const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please Add a text value']
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Goal", goalSchema)