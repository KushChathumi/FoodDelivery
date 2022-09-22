const mongoose = require("mongoose");

const outletSchema = new mongoose.Schema({
    outletID : Number,
    name : String,
    address : String,
    rating : Number,
    picture : String
});

module.exports = outletSchema;