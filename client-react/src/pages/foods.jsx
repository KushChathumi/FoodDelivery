import React, { Component } from "react";
import Food from './food';
import axios from "axios";

class Foods extends Component{
    state = {
        allFoods : [],
    };
    render(){
        return(
            <div className="container">
                <div className="row">
                    {this.state.allFoods.map( food => (
                        <div key={food.id} className="col">
                            <Food key={food.id} food = {food} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    async componentDidMount(){
        const { data } = await axios.get("http://localhost:5000/api/foods");
        let foods = data.map(( food ) => {
            return {
                id : food._id,
                outletID : food.outletID,
                foodID : food.foodID,
                name : food.name,
                price : food.price,
                description : food.description,
                rating : food.rating,
                picture: food.picture
            };
        });
        this.setState({allFoods : foods})
    } 

    async getSingleOutlet(id){
        const { data } = await axios.get(`http://localhost:5000/api/foods${id}`);
        let foods = data.map(( food ) => {
            return {
                id : food._id,
                outletID : food.outletID,
                foodID : food.foodID,
                name : food.name,
                price : food.price,
                description : food.description,
                rating : food.rating,
                picture: food.picture
            };
        });
        this.setState({allFoods : foods})
    } 


}

export default Foods;