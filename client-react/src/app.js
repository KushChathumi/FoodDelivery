import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Outlets from './pages/outlets';
import Food from './pages/foods';
// import Navigation from './components/navigation';
// import DashBoard from "./components/dashboard";
import NavBar from './components/navbar';
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/outlets" element={<Outlets />} />
            <Route path="/foods" element = {<Food />} />
          </Routes>
      </Router>
    </div>
  );
}


// function App(){
//   return(
//     <div className="App">
//       <BrowserRouter>
//         <SiteRoutes/>
//       </BrowserRouter>
//     </div>
//   )
// }

export default App;