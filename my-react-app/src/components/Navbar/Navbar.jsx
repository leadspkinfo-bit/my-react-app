import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header-wrapper">
      
      <div className="top-bar">
        <div className="top-bar-left">
          <span className="contact-number">
            <i className="fas fa-phone-alt"></i> +92 300 1234567
          </span>
          {/* Menu Icon (3 Lines) - Ispe click se menu khulega */}
          <div className="menu-icon" onClick={() => setIsMobileMenuOpen(true)}>
            &#9776; 
          </div>
        </div>

        <div className="top-bar-right">
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="Leads PK" className="navbar-logo-img" />
          </a>
        </div>

        {/* --- SIDEBAR MENU --- */}
        <ul className={isMobileMenuOpen ? "nav-links active" : "nav-links"}>
          
          {/* Close Icon (X) */}
          <div className="close-icon" onClick={() => setIsMobileMenuOpen(false)}>
            &times;
          </div>

          {/* Links: onClick pe menu khud band ho jayega */}
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About LeadsPk</a></li>
          <li><a href="#blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</a></li>
        </ul>

        <a href="#contact" className="contact-btn">Contact Us</a>
      </nav>
      
    </header>
  );
};

export default Navbar;