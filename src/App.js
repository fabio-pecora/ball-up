// App.js

import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Header Section */}
      <header>
        <h1>Basketball Finder</h1>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Find the Best Basketball Courts Near You</h2>
        <p>Search for basketball courts, view details, and get the best court experience in your area.</p>
        <button>Get Started</button>
      </section>

      {/* Courts Section (Cards for Courts) */}
      <section className="courts-section">
        <h2>Featured Courts</h2>
        <div className="court-card">
          <h3>Court A</h3>
          <p>Location: Downtown</p>
          <p>Description: Great court with good facilities.</p>
        </div>
        <div className="court-card">
          <h3>Court B</h3>
          <p>Location: City Center</p>
          <p>Description: Spacious and well-maintained.</p>
        </div>
        <div className="court-card">
          <h3>Court C</h3>
          <p>Location: East Park</p>
          <p>Description: Good for casual games and practice.</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Basketball Finder. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
