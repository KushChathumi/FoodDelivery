const express = require('express');
const Outlet = require('../models/outlet');
const router = express.Router();
const Food = require("../models/food");

router.get("/", async(req,res)=>{
    try{
        let food = await Food.find();
        return res.send(food)
    } catch (ex){
        return res.status(500).send("Error : ", ex);
    }
});

router.get("/:id", async(req,res)=>{
    let requestedID = req.params.id;
    let food = await Food.findById(requestedID);
    try{
        if(!food) {
            return res
                .status(404)
                .send("Food you are looking for does not exist")
           }
           return res.send(food)
    }catch(ex){
        return res.status(500).send("Error : ", ex);
    }
});

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
            return res.send(food)
    }catch(ex){
        return res.status(500).send("Error : ", ex);
    }
 });

 router.post("/", async(req,res)=>{
    if(!req.body.name || !req.body.price || !req.body.description || !req.body.picture){
        return res
            .status(400)
            .send("Please fill the required flieds")
    }
    let newFood = new Food({
        outletID : req.body.outletID,
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
        rating : req.body.rating,
        picture :req.body.picture,
    })
     try{
        newFood = await newFood.save();
        return res.send(newFood);
     }catch(ex){
        return res.status(500).send("Error : ", ex);
     }
 });

router.delete("/:id", async(req,res) =>{
    let requestedID = req.params.id;
    try{
        let food = await Food.findByIdAndDelete(requestedID);
        if(!food){
            return res
                .status(404)
                .send("Food you are looking for does not exist")
        }
        res.send(outlet);
    } catch(ex){
        return res.status(500).send("Error : ", ex);
    }
});


module.exports = router