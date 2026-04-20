import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
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

        {/* Desktop wale Social Icons */}
        <div className="top-bar-right desktop-socials">
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Leads PK" className="navbar-logo-img" />
          </Link>
        </div>

        {/* --- SIDEBAR MENU --- */}
        <ul className={isMobileMenuOpen ? "nav-links active" : "nav-links"}>
          
          {/* Close Icon (X) */}
          <div className="close-icon" onClick={() => setIsMobileMenuOpen(false)}>
            &times;
          </div>

          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><a href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About LeadsPk</a></li>
          <li><a href="/#blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</a></li>

          {/* === NAYA ADDITION: Sidebar ke andar Mobile Social Icons === */}
          <div className="sidebar-socials">
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </ul>

        <Link to="/contact" className="contact-btn">Contact Us</Link>
      </nav>
      
    </header>
  );
};

export default Navbar;