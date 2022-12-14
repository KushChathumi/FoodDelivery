const mongoose = require("mongoose");

const outletSchema = new mongoose.Schema({
    outletID : {
        type : Number,
        require : true,
    },

    name : {
        type : String,
        require : true,
        minlength: 3,
        maxlength: 200
    },

    address : {
        type : String,
        require : true,
        minlength: 5,
        maxlength: 50
    },

    rating : {
        type : [Number],
        enum : [1,2,3,4,5]
    },

    picture : {
        type: String,
        required: true
    },

    date: {
        type : Date,
        default : Date.now
    },
});

module.exports = mongoose.model("Outlet",outletSchema);