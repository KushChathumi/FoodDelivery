//Collection of outlets
//Parent Component 

import React, { Component } from "react";
import Outlet from './outlet'
import axios from "axios";

class Outlets extends Component{
    state = {
        allOutlets : [],
    };
    render(){
        return (
            <div className="container">
                <div className="row">
                    {this.state.allOutlets.map(outlet => (
                        <div key={outlet.id} className="col">
                            <Outlet 
                                key={outlet.id} 
                                outlet= {outlet} 
                                onDelete = {() => this.deleteOutlet(outlet.id)}
                                onView = {() => this.viewOneOutlet(outlet.id)}
                            />
                        </div>
                    ))}
                </div> 
            </div>
        )
    }

    async componentDidMount() {
        const { data } = await axios.get("http://localhost:5000/api/outlets");
        let oultets = data.map((outlet) => {
            return {
                id : outlet._id,
                outletID : outlet.outletID ,
                name : outlet.name,
                address : outlet.address,
                rating : outlet.rating,
                picture : outlet.picture
            };
        });
        this.setState({allOutlets : oultets})
    }

    async deleteOutlet(id){
        await axios.delete(`http://localhost:5000/api/outlets/${id}`)
        let updatedOutlet = this.state.allOutlets.filter(outlet => outlet.id !== id)
        this.setState({allOutlets : updatedOutlet });
    }

    async viewOneOutlet(id){
        await axios.get(`http://localhost:5000/api/outlets/${id}`)
        let viewOutlet = this.state.allOutlets.filter(outlet => outlet.id === id)
        this.setState({allOutlets : viewOutlet });
    }
} 

export default Outlets;