import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style.css'; // Make sure to create this CSS file

const Navbar = ({ size, setshow }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={() => setshow(true)}>🏠 Home</Link>
        </div>
        <div className="navbar-links">
          <Link to="/signup">Signup</Link>
          <Link to="/signin">Signin</Link>
          <Link to="/cart" onClick={() => setshow(false)}>Cart</Link>
          <div className="cart-icon" >
            <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
            <span className="cart-count">{size}</span> 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
