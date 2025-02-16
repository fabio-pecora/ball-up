import React from 'react';
import '../AboutUs.css';
import fabioPic from '../assets/fabio.PNG';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="section goal">
        <h2>
          <i className="fas fa-basketball-ball"></i> Our Goal
        </h2>
        <ul>
          <li>
            <span role="img" aria-label="map">📍</span> Find Every Court Near You 
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
        <ul>
          <li>
            <span role="img" aria-label="map">📱</span> Lounch a mobile app
          </li>
          <li>
            <span role="img" aria-label="basketball">🌆</span> Expand to other cities
          </li>
          <li>
            <span role="img" aria-label="chat">🏀</span> Host tournaments
          </li>
          <li>
            <span role="img" aria-label="network">🏆</span> Maintain leaderboards
          </li>
        </ul>
        <i className="icon fas fa-rocket"></i>
      </section>
      <section className="section meet-team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img
            src={fabioPic}
            alt="Fabio Pecora"
            className="team-photo"
          />
          <div className="team-info">
            <h3>Fabio Pecora</h3>
            <p>
              I have loved and played basketball since I was 4.
              Since I moved to NY I started dreaming of a basketball social network where people who share
              the same passion can come together to find courts, meet people, and love the game.
            </p>
            <div className="contact-info">
              <p>
                <span role="img" aria-label="email">📧</span> fabiopecora01@gmail.com
              </p>
              <p>
                <span role="img" aria-label="mobile">📱</span> +1 9295295942
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
