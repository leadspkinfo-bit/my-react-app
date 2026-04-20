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
          <div className="menu-icon" onClick={() => setIsMobileMenuOpen(true)}>
            &#9776; 
          </div>
        </div>

        {/* Desktop wale Social Icons - Sirf 3 bache hain real links k sath */}
        <div className="top-bar-right desktop-socials">
          <a href="https://www.facebook.com/Leadspktechnologies" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/leadspktechnologies/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://wa.me/923356471866" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Leads PK" className="navbar-logo-img" />
          </Link>
        </div>

        <ul className={isMobileMenuOpen ? "nav-links active" : "nav-links"}>
          
          <div className="close-icon" onClick={() => setIsMobileMenuOpen(false)}>
            &times;
          </div>

          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><a href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About LeadsPk</a></li>
          
          {/* Blog ko hata kar Case Study kar diya */}
          <li><a href="/#case-study" onClick={() => setIsMobileMenuOpen(false)}>Case Study</a></li>
          
          <li className="mobile-contact-li">
            <Link to="/contact" className="mobile-contact-btn" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </li>

          {/* Mobile wale Social Icons - Sirf 3 real links */}
          <div className="sidebar-socials">
            <a href="https://www.facebook.com/Leadspktechnologies" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/leadspktechnologies/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/923356471866" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
        </ul>

        {/* Desktop wala Contact Button */}
        <Link to="/contact" className="contact-btn">Contact Us</Link>
      </nav>
      
    </header>
  );
};

export default Navbar;