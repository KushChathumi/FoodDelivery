const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    outletID : {
        type : Number ,
        require : true,
    },

    foodID : {
        type : Number ,
        require : true,
    },

    name : {
        type : String,
        require : true,
        minlength: 3,
        maxlength: 50
    },

    price : {
        type : Number ,
        require : true,
    },

    description : {
        type: String,
        required: true
    },

    rating : {
        type : [Number],
        enum : [1,2,3,4,5]
    },

    picture : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Food",foodSchema);