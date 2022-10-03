//Child Component
//every component have props
//props cannot change(imiutable)
//states is changable
//always good to use stateless components 

import React, { Component } from "react";

 class Outlet extends Component{
    state = {};
    isOutlet(){
        return this.state.outletId >10 ? "It is an Outlet" : "It is not an oulet";
    }
    // showFood (){
    //     if(this.state.foodName.length === 0) return <p>No Foods available</p>;
    //     return this.state.foodName.map((foodName,index) => (
    //     <li key={index}>{foodName}</li>
    //     ));
    //}
    likeOutlet = () => {
        this.setState({likeCount : this.state.likeCount + 1})
        console.log("You have liked Outlet")
    }
    render(){
        return (
            <div className="card" style={{width: "18rem" ,height: "28rem" , marginTop:"20px"}}  >
                <img 
                    style = {{height : "15rem"}}
                    src={this.props.outlet.picture}    
                    className="card-img-top" 
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{this.props.outlet.name}</h5>
                        Adress : {this.props.outlet.address}
                        <br/>
                        Loaction : 
                        <br/>
                        Rating : {this.props.outlet.rating}
                    <br/>
                    <br/>
                    <div className="container">
                        <div className="raw">
                            {" "}
                            <button className="btn btn-primary" >
                                 View 
                            </button> {" "}
                            <button className="btn btn-danger" onClick={this.props.onDelete}>
                                Delete
                            </button> {" "}
                            <button className="btn btn-info">
                                Favorite
                            </button> {" "}
                        </div>
                    </div>   
                </div>
            </div>
        );
    }

 }

 export default Outlet
  