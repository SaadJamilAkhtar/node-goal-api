const mongoose = require('mongoose')

const User = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please Add Name"]
        },
        email: {
            type: String,
            required: [true, "Please Add Email"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please Add Password"]
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('User', User)