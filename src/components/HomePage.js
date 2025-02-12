// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/path-to-your-logo.png" alt="Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
      {/* Hero Section */}
      <section className="hero">
        <h1>Basketball Finder</h1>
        <p>Find and connect with basketball courts near you and join the fun!</p>
        <button>Get Started</button>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="about-us">
        <h2>About Us</h2>
        <p>Basketball Finder is your go-to platform to find local basketball courts and events. Whether you're looking for a pickup game or a private event, we've got you covered!</p>
      </section>

      {/* Search Courts Section */}
      <section id="search-courts" className="search-courts">
        <h2>Search for Courts or Events</h2>
        
        <div className="search-options">
          {/* Public Courts Option */}
          <div className="search-option public-courts">
            <h3>Public Courts</h3>
            <p>Looking to shoot around? Find public basketball courts near you!</p>
            <input type="text" placeholder="Enter location..." />
            <button>Search Public Courts</button>
          </div>

          {/* Private Events/Courts Option */}
          <div className="search-option private-courts">
            <h3>Private Courts</h3>
            <p>Prefer playing indoors? Find indoor courts and private events.</p>
            <input type="text" placeholder="Enter location..." />
            <button>Search Private Courts</button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer>
        <p>&copy; 2025 Basketball Finder. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
