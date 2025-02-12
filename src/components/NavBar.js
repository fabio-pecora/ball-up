// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
