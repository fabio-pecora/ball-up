import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage'; // Ensure path is correct
import Login from './components/Login'; // Ensure path is correct
import SignUp from './components/SignUp'; // Ensure path is correct
import ContactUs from './components/ContactUs'; // Ensure path is correct
import AboutUs from './components/AboutUs'; // If you have an About Us page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* Add About Us route */}
      </Routes>
    </Router>
  );
}

export default App;
