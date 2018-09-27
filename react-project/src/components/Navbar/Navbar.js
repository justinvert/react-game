import React from 'react';

const Navbar = props => 
<nav className="navbar">
<div className="container text-center">
        <ul id="nav" className=" list-inline">
      {props.children}
          
        </ul>
    </div>

  </nav>;



export default Navbar;
