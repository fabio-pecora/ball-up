// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">    
      {/* Hero Section */}
      <section className="hero">
        <h1>Ball Up</h1>
        <p>FIND AND CONNECT WITH BASKETBALL COURTS NEAR YOU AND JOIN THE FUN!</p>
        <button>Get Started</button>
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
