// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Import the Modal component
import '../NavBar.css';

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
          <li>
            <button className="nav-btn" onClick={() => openModal("login")}>
              Login
            </button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => openModal("signup")}>
              Sign Up
            </button>
          </li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>

      {/* Modal for Login or Sign Up */}
      {showModal && <Modal modalType={modalType} closeModal={closeModal} />}
    </>
  );
};

export default Navbar;
