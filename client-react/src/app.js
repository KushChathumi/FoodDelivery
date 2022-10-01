import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Outlets from './components/outlets';
import Food from './components/foods';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
          <Routes>
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