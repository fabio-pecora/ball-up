// ContactUsPage.js

import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="contactus-page">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUsPage;
