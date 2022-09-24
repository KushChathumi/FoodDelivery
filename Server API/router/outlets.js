const express = require('express');
const router = express.Router();
const Outlet = require("../models/outlet");

// var outletArray = [
//     {id: 1, name: "Pizza Hut"},
//     {id: 2, name: "Burger King"},
//     {id: 3, name: "Acradia"}
// ];


router.get("/", async(req,res) => {
   try{
        let outlets = await Outlet.find();
        return res
            .status(200)
            .send(outlets);
   } catch(ex){
    return res.status(500).send("Error", ex.message);
   }
});

router.get("/:id", async(req,res) => {
    let requestedOutlet = req.params.id;
    let outlet = await Outlet.findById(requestedOutlet); 
    if(!outlet){
        return res
            .status(404)
            .send("Outlet you are looking for does not exist.")
    }
    return res
        .status(200)
        .send(outlet);
});

router.post("/", async(req,res) =>{
    if(!req.body.outletID || !req.body.name || !req.body.address || !req.body.picture ){
        return res 
        .status(400)
        .send("Please fill the required flieds")
    }else if (req.body.name.length <3 || req.body.description.length <5 ){
        return res
            .status(400)
            .send("Please Provide the Correct details.")
    }
    let newOutlets = new Outlet ({
        outletID : req.body.outletID,
        name : req.body.name,
        address : req.body.address,
        rating : req.body.rating,
        picture : req.body.picture,
    });
    try{
        newOutlets = await newOutlets.save();
        return res
            .status(200)
            .send(newOutlets);    
   } catch(ex){
    return res
        .status(500)
        .send("Error", ex.message);
   }
});

router.delete("/:id", async(req,res) => {
    let requestedOutlet = req.params.id;
    try{
        let outlet = await Outlet.findByIdAndDelete(requestedOutlet); 
        if(!outlet){
            return res
                .status(400)
                .send("Food you are looking for does not exist")
        }
        return res
            .status(200)
            .send(outlet);
    }catch(ex){
        return res
            .status(500)
            .send(ex.message);
    }
});

router.put("/:id", async(req,res)=>{
    let requestedOutlet = req.params.id;
    let outlet = await Outlet.findById(requestedOutlet);
   
    if(!outlet) {
     return res
        .status(404)
        .send("Food you are looking for does not exist")
    }

    outlet.set({name : req.body.name});
    outlet = await outlet.save()
    return res
        .status(200)
        .send(outlet)
 });

module.exports =  router
