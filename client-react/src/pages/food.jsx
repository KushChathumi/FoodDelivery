import React, {Component} from "react";

class Food extends Component{
    state = {};
    render(){
        return(
                <div className="card" style={{width: "18rem" ,height: "30rem" , marginTop:"20px"}}  >
                <img 
                    style = {{height : "15rem"}}
                    src = {this.props.food.picture}
                    className="card-img-top" 
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{this.props.food.name}</h5>
                    <p className="card-text">
                        {this.props.food.description}
                    </p>
                    <div className="container">
                        <div className="raw">
                            {" "}
                            <button className="btn btn-primary" >
                                 View 
                            </button> {" "}
                            <button className="btn btn-success" >
                                 Update
                            </button> {" "}
                            <button className="btn btn-danger" >
                                Delete
                            </button> {" "}
                        </div>
                    </div>        
                </div>
            </div>            
        )
    }
}

export default Food;