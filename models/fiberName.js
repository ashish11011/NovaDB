const mongoose = require("mongoose");

const fiberNameSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true,
    },
    count: {
        type: Number,
        require: true,
    }
},{timestamps: true});

const fiberName = mongoose.model( "fiberName", fiberNameSchema);

module.exports = fiberName;