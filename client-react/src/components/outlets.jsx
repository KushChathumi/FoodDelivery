//Collection of outlets
//Parent Component 

import React, { Component } from "react";
import Outlet from './outlet'

class Outlets extends Component{
    state = {
        allOutlets : [
            { id:1, name: "KFC", likeCount : 5 },
            { id:2, name: "Burger King", likeCount : 10 },
            { id:3, name: "Subway", likeCount : 15 },
        ],
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    {this.state.allOutlets.map(outlet => (
                        <div key={outlet.id} className="col">
                            <Outlet key={outlet.id} 
                                likeCount={outlet.likeCount}
                                name = {outlet.name} 
                            />
                        </div>
                    ))}
                </div> 
            </div>
        )
    }
}

export default Outlets;