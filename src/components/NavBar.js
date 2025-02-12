// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css';
import '../Modal.css';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "login" or "signup"

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/path-to-your-logo.png" alt="Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><button className="nav-btn" onClick={() => openModal("login")}>Login</button></li>
          <li><button className="nav-btn" onClick={() => openModal("signup")}>Sign Up</button></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>

      {/* Login/Sign Up Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>{modalType === "login" ? "Login" : "Sign Up"}</h2>
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            {modalType === "signup" && <input type="text" placeholder="Username" />}
            <button>{modalType === "login" ? "Login" : "Sign Up"}</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
