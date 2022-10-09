import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Outlets from './pages/outlets';
import Food from './pages/foods';
import NavBar from './components/navbar';
import Home from './components/home'
import SignIn from './components/signin';
import SignUp from './components/signUp'
import Order from './pages/orders';
import Wishlist from './pages/wishlists';
import AddOutlet from './pages/createOutlet';
import AddFood from './pages/createFood';
import Customer from './components/customers';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Outlets />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/foods" element = {<Food />} />
            <Route path="/order" element = {<Order />} />
            <Route path="/wishlist" element = {<Wishlist />} />
            <Route path="/addoutlet" element = {<AddOutlet />} />
            <Route path="/addfood" element = {<AddFood />} />
            <Route path="/user" element = {<Customer />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;