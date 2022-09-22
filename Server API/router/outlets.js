const express = require('express');
const router = express.Router();

var outletArray = [
    {id: 1, name: "Pizza Hut"},
    {id: 2, name: "Burger King"},
    {id: 3, name: "Acradia"}
]

router.get("/", (req,res) => {
    res.send(outletArray);
});

router.get("/:id", (req,res) => {
    let requestedoutlet = req.params.id
    let outlet = outletArray.find(outlet => outlet.id == requestedoutlet);
    if(!outlet){
        return res
            .status(400)
            .send("Outlet you are looking for does not exist.")
    }
    res.send(outlet);
});

router.post("/", (req,res) =>{
    if(!req.body.name){
        return res
            .status(400)
            .send("Please enter the values")
    }

    let newOutlet = {
        id : outletArray.length + 1 ,
        name : req.body.name
    }

    outletArray.push(newOutlet);
    res.send(newOutlet)
});

router.delete("/:id", (req,res) => {
    let outlet = outletArray.find((outlet)=> outlet.id == req.params.id);
    if(!outlet){
        return res
        .status(400)
        .send("Food you are looking for does not exist")
    }

    let indexOfOutlet = outletArray.indexOf(outlet);
    outletArray.splice(indexOfOutlet,1);
    res.send(outlet);
});

module.exports =  router
