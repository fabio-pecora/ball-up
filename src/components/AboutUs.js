import React from 'react';
import '../AboutUs.css';



const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="section goal">
        <h2>
          <i className="fas fa-basketball-ball"></i> Our Goal
        </h2>
        <ul>
          <li>
            <span role="img" aria-label="map">📍</span> Find Courts Near You
          </li>
          <li>
            <span role="img" aria-label="basketball">🏀</span> Show Your Game
          </li>
          <li>
            <span role="img" aria-label="chat">💬</span> Chat &amp; Set Up Runs
          </li>
          <li>
            <span role="img" aria-label="network">🤝</span> Meet &amp; Network with Players
          </li>
        </ul>
      </section>




      
      <section className="section operate">
        <h2>Where We Operate</h2>
        <p>We are currently active in the 5 boroughs of New York City!(Staten Island, Brooklyn, Manhattan, Bronx, and Queens).</p>
        <i className="icon fas fa-globe-americas"></i>
      </section>
      
      <section className="section future-goal">
        <h2>Our Future Goal</h2>
        <p>We aim to expand globally, introducing innovative ways to enhance basketball culture through technology and community-driven initiatives.</p>
        <i className="icon fas fa-rocket"></i>
      </section>
      
      <section className="section team">
        <h2>Meet the Team</h2>
        <p>Our team is made up of passionate basketball enthusiasts, developers, and community leaders who strive to make a difference in the game.</p>
        <i className="icon fas fa-users"></i>
      </section>
      
      <section className="section involvement">
        <h2>How to Get Involved</h2>
        <p>Want to be part of the BALL UP movement? Join us today and contribute to the growing basketball community.</p>
        <i className="icon fas fa-hands-helping"></i>
      </section>
    </div>
  );
};

export default AboutUs;
