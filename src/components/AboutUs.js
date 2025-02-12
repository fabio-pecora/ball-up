import React from 'react';
import '../AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="section goal">
        <h2>Our Goal</h2>
        <p>At BALL UP, our mission is to bring basketball lovers together, creating a vibrant community where everyone can share their passion for the game.</p>
      </section>

      <section className="section operate">
        <h2>Where We Operate</h2>
        <p>We are currently active in multiple cities, connecting players, teams, and fans to make basketball more accessible and engaging for all.</p>
      </section>

      <section className="section future-goal">
        <h2>Our Future Goal</h2>
        <p>We aim to expand globally, introducing innovative ways to enhance basketball culture through technology and community-driven initiatives.</p>
      </section>

      <section className="section team">
        <h2>Meet the Team</h2>
        <p>Our team is made up of passionate basketball enthusiasts, developers, and community leaders who strive to make a difference in the game.</p>
      </section>

      <section className="section involvement">
        <h2>How to Get Involved</h2>
        <p>Want to be part of the BALL UP movement? Join us today and contribute to the growing basketball community.</p>
      </section>
    </div>
  );
};

export default AboutUs;
