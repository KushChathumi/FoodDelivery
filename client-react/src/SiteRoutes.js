import React from "react";
import {Routes, Route} from 'react-router-dom'
import Outlets from './components/outlets';
import Food from './components/foods';
//import Navigation from './components/navigation';

const SiteRoutes = () => {
    return(
        <Routes>
            <Route exact path = "/" component = {Outlets} />
            <Route exact path = "/foods" component = {Food} />
        </Routes>
    )
}

export default SiteRoutes;