const express = require('express');
const router = express.Router();

var foodArray = [
    {id: 1, name: "Pizza"},
    {id: 2, name: "Burger"},
    {id: 3, name: "Kottu"}
]

router.get("/", (req,res)=>{
    res.send(foodArray)
});

router.get("/:id", (req,res)=>{
   let requestedID = req.params.id;
   let food = foodArray.find(food => food.id == requestedID);
   if(!food) {
    return res
        .status(404)
        .send("Food you are looking for does not exist")

   }
   res.send(food)
});

router.put("/:id", (req,res)=>{
    let requestedID = req.params.id;
    let food = foodArray.find(food => food.id == requestedID);
    if(!food) {
     return res.status(404).send("Food you are looking for does not exist")
    }
    food.name = req.body.name;
   return res.send(food)
 });

 router.post("/", (req,res)=>{

    if(!req.body.name){
        return res
            .status(400)
            .send("Please enter the values")
    }
    let newFood = {
        id : foodArray.length + 1,
        name: req.body.name 
    }

    foodArray.push(newFood);
    return res.send(newFood);
 });

router.delete("/:id", (req,res) =>{
    let food = foodArray.find((b)=> b.id == req.params.id);
    if(!food){
        return res
            .status(404)
            .send("Food you are looking for does not exist")
    }
    let indexoffood =  foodArray.indexOf(food);
    foodArray.splice(indexoffood, 1);
    res.send(food)
});


module.exports = router