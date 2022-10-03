import React from "react";
import LeftNavBar from "./leftNavBar"
import Footer from "./footer"
import { Outlet } from "react-router-dom";

function DashBoard () {
    return(
        <div className=" d-flex flex-column flex-root">
            {/* begin: page*/}
            <div className="page d-flex flex-row flex-column-fluid">
               {/* begin: side bar*/}
               <div id="kt-aside" className="aside py-9">
                <LeftNavBar/>
               </div>
            <div className="wrapper d-flex flex-column flex-row-fluid" id="kt-wrapper">
                <Outlet/>
            </div>
            <br/><br/>
            <Footer/>
            </div>
        </div>
    )
}
export default DashBoard;