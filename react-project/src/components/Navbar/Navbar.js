import React from 'react';
import "./Navbar.css";

const Navbar = props => 
<nav className="navbar">
<div className="container text-center">
        <ul id="nav" className=" list-inline">
      {props.children}
          
        </ul>
    </div>

  </nav>;



export default Navbar;
