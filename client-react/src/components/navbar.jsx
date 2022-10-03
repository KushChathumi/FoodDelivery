import React from 'react'
import { Link } from "react-router-dom";

function Navigation() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <img src="https://www.houstonfood2u.com/images/logos/original-logos-500.png"
                alt="" width="50" height="50" className="d-inline-block align-text-top"/>
            <div className="container-fluid">
                <Link to ="/" className="navbar-brand" >TasteBuds</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to ="/outlets" className="nav-link active" aria-current="page">Outlet</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/foods" className="nav-link active" aria-current="page">Food</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="" className="nav-link active" aria-current="page">Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="" className="nav-link active" aria-current="page">Favorite</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="" className="nav-link active" aria-current="page">Customers</Link>
                        </li>
                    </ul>
                    <div className="float-end">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to ="" className="nav-link active" aria-current="page">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="" className="nav-link active" aria-current="page">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;