import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Ab humne dono navbars ko ek 'header-wrapper' mein band kar diya hai
    <header className="header-wrapper">
      
      {/* --- TOP BAR (Uper wali patti) --- */}
      <div className="top-bar">
        <div className="top-bar-left">
          {/* Laptop par number dikhega, Mobile par hide ho jayega */}
          <span className="contact-number">
            <i className="fas fa-phone-alt"></i> +92 300 1234567
          </span>
          {/* Mobile par Menu (3 lines) yahan aayengi */}
          <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            &#9776; 
          </div>
        </div>

        <div className="top-bar-right">
          {/* Social Icons (Aap inke href mein apne links daal sakte hain) */}
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* --- MAIN NAVBAR (Neechay wali patti) --- */}
      <nav className="navbar">
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="Leads PK" className="navbar-logo-img" />
          </a>
        </div>

        <ul className={isMobileMenuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About LeadsPk</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>

        <a href="#contact" className="contact-btn">Contact Us</a>
      </nav>
      
    </header>
  );
};

export default Navbar;