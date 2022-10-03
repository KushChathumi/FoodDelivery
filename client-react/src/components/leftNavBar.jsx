import React from 'react'
import { FaHome,FaStore,FaShoppingCart,FaStar,FaUserAlt,FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="container-fluid" style={{boarder : "2pxsolidred" }} >
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        {/* < Link to="" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Menu</span>
                        </Link> */}
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li>
                                < Link to="/" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 "></i><FaHome style={{fontSize: '25px'}}/> <span className="ms-1 d-none d-sm-inline">Home</span></Link>
                            </li>
                            <li>
                                < Link to="/outlets" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 "></i><FaStore style={{fontSize: '25px'}}/> <span className="ms-1 d-none d-sm-inline">Outlet</span></Link>
                            </li>
                            <li>
                                < Link to="/foods" className="nav-link px-0 align-middle">
                                    <i className="fs-4 "><FaHome style={{fontSize: '25px'}}/></i> <span className="ms-1 d-none d-sm-inline">Foods</span></Link>
                            </li>
                            <li>
                                < Link to="" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                    <i className="fs-4"><FaShoppingCart style={{fontSize: '25px'}}/></i> <span className="ms-1 d-none d-sm-inline">Orders</span></Link>
                            </li>
                            <li>
                                < Link to="" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4"><FaStar style={{fontSize: '25px'}}/></i> <span className="ms-1 d-none d-sm-inline">Wishlist</span> </Link>
                            </li>
                            <li>
                                < Link to="" className="nav-link px-0 align-middle">
                                    <i className="fs-4"><FaHome style={{fontSize: '25px'}}/></i> <span className="ms-1 d-none d-sm-inline">Customers</span></Link>
                            </li>
                        </ul>
                        <hr/>
                {/* <div> */}
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li>
                        < Link to="" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                             <i className="fs-4 "></i><FaUserAlt style={{fontSize: '25px'}}/> <span className="ms-1 d-none d-sm-inline">Sign In</span></Link>
                     </li>
                     <li>
                        < Link to=""data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                             <i className="fs-4 "></i><FaUserPlus style={{fontSize: '25px'}}/> <span className="ms-1 d-none d-sm-inline">Sign Up</span></Link>
                     </li>
                    </ul>
                {/* </div> */}
            </div>
        </div>
        <div className="col py-3">
       dashboard
        </div>
    </div>
 </div>
    )
}

export default Navigation;