//Child Component
//every component have props
//props cannot change(imiutable)
//states is changable
//always good to use stateless components 

import React, { Component } from "react";

 class Outlet extends Component{
    state = {
        outletId : 1000,
        outletName : this.props.name,
        foodName : ["Cheese Burgur","Vegi Burger","Chichen Burgur"] ,
        likeCount : this.props.likeCount
    };
    isOutlet(){
        return this.state.outletId >10 ? "It is an Outlet" : "It is not an oulet";
    }
    showFood (){
        if(this.state.foodName.length === 0) return <p>No Foods available</p>;
        return this.state.foodName.map((foodName,index) => (
        <li key={index}>{foodName}</li>
        ));
    }
    likeOutlet = () => {
        this.setState({likeCount : this.state.likeCount + 1})
        console.log("You have liked Outlet")
    }
    render(){
        return (
                <div className="card" style={{width: "18rem"}}>
                <img 
                    src="http://bizenglish.adaderana.lk/wp-content/uploads/Ja-Ela-opening-Composite-1A.jpg"    
                    className="card-img-top" 
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{this.state.outletName}</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and 
                        make up the bulk of the card's content.
                    </p>
                    <ul>
                           {this.showFood()}
                        </ul>
                    <button className="btn btn-primary" onClick={this.likeOutlet}>
                        Like 
                        <span className="badge bg-secondary"> 
                            {this.state.likeCount}
                        </span>
                    </button>
                </div>
                </div>
        );
    }

 }

 export default Outlet
  