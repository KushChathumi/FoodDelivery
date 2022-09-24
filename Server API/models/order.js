const mongoose = require("mongoose");
const user = require("./user");

const orderSchema = new mongoose.Schema({
    
    user : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : 'User',
    },

    foodID : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : 'Food',
    },

    quntity : {
        type : Number ,
        require : true,
    },

    totalAmount : {
        type : Number 
    },

    address : {
        type : String,
        require : true,
        minlength: 5,
        maxlength: 50
    },

    date: {
        type : Date,
        default : Date.now
    },
});

module.exports = mongoose.model("Order",orderSchema);