import React from 'react';
import './Navbar.css';

// Aapki logo file yahan import ho rahi hai
import logoImg from '../../assets/logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <a href="#home">
          <img src={logoImg} alt="Leadspk Logo" className="navbar-logo-img" />
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#about">ABOUT LEADSPK</a></li>
        <li><a href="#blog">BLOG</a></li>
      </ul>

      {/* Action Button */}
      <a href="#contact" className="contact-btn">CONTACT US</a>
    </nav>
  );
};

export default Navbar;