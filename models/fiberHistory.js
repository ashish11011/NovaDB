const mongoose = require("mongoose");

const fiberHistorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    history: [{
        description: {
            type: String,
            require: true,
        },
        count: {
            type: Number,
            require: true,
        },
        time: {
            type: Date ,
        }
    }],
},{timestamps: true});

const fiberHistory = mongoose.model("fiberHistory",fiberHistorySchema);

module.exports = fiberHistory;