const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,

    },

    email : {
        type : String,
        require : true,
        unique : true,
    },

    password : {
        type : String,
        require : true,
    },

    isAdmin : {
        type : Boolean
    },

    date: {
        type : Date,
        default : Date.now
    },
});

module.exports = mongoose.model("User",userSchema);