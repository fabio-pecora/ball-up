import React, { useState } from "react";
import "../ContactUs.css";
import { Mail, User, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="contact-form-container">
      <div className="contact-card">
        <h2 className="contact-color">Contact Us</h2>
        <p className="text-center">We'd love to hear from you!</p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="form-group">
            <div className="input-wrapper">
              <User className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input-field"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <MessageSquare className="input-icon" />
              <textarea
                name="message"
                placeholder="Your Message"
                className="input-field"
                rows="4"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        ) : (
          <p className="text-center">Thank you for reaching out! 🏀</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
