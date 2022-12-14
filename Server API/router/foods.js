const express = require('express');
const router = express.Router();
const Food = require("../models/food");

router.get("/", async(req,res)=>{
    try{
        let food = await Food.find();
        return res
            .status(200)
            .send(food)
    } catch (ex){
        return res
            .status(500)
            .send("Error : ", ex.message);
    }
});

router.get("/:id", async(req,res)=>{
    let food = req.params.id;
    console.log(food)
    //let food = await Food.find({"outletID" : requestedID}); 
    try{
        if(!food) {
            return res
                .status(404)
                .send("Food you are looking for does not exist")
           } 
           return res
                .status(200)
                .send(food)
    }catch(ex){
        return res
            .status(500)
            .send("Error : ", ex);
    }
});
// let requestedfood = req.params.id;
// let food = await Food.find({"outletID":requestedfood}); 
// if(!food){
//     return res
//         .status(404)
//         .send("food you are looking for does not exist.")
// }
// return res
//     .status(200)
//     .send(food);
// });


router.put("/:id", async(req,res)=>{
    let requestedID = req.params.id;
    try {
        let food = await Food.findById(requestedID);
        if(!food) {
            return res
               .status(404)
               .send("Food you are looking for does not exist")
           }
            food.set({name : req.body.name});
            food = await food.save()
            return res
                .status(200)
                .send(food)
    }catch(ex){
        return res
            .status(500)
            .send("Error : ", ex);
    }
 });

 router.post("/", async(req,res)=>{
     try{
        let newFood = new Food({
            outletID : req.body.outletID,
            name : req.body.name,
            price : req.body.price,
            description : req.body.description,
            rating : req.body.rating,
            picture :req.body.picture,
        })
        
        newFood = await newFood.save();
        return res
            .status(200)
            .send(newFood);
     }catch(ex){
        return res
            .status(500)
            .send({ message:"Error : ", ex});
     }
 });

router.delete("/:id", async(req,res) =>{
    let requestedID = req.params.id;
    let foodID = await Food.find({"foodID":requestedID});
    try{
        let food = await Food.findByIdAndDelete(foodID);
        if(!food){
            return res
                //.status(404)
                .send("Food you are looking for does not exist")
        }
        res.send(outlet);
    } catch(ex){
        return res
            //.status(500)
            .send("Error : ", ex);
    }
});


module.exports = router