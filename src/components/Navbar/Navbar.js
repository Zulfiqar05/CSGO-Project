import React from "react";
import "./style.css";
import logo from '../../components../../images/logo.png'


const Navbar = () => {
  return (
    <div className="Nav-main">
      <div className="main-container">
        <button className="shop-btn">Shop</button>
        <img src={logo} alt=""/>
         
        
      </div>
      <div className="nav-text" >
        <h2>GAMING</h2>
        <h2>IS OUR PASSION</h2>
      </div>

      <div className="last-buttons">

        <div>

      <button className="nav-btn-1">
        View Members
      </button>

        </div>


        <div>

      <button className="nav-btn">
        Shop
      </button>

        </div>




      </div>
    </div>
  );
};

export default Navbar;
