import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../../assets/logo.png'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // === SCROLL SPY LOGIC ===
  useEffect(() => {
    if (location.pathname === '/contact') return;

    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 }); // Jab 50% section screen par aaye

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [location.pathname]);

  return (
    <header className="header-wrapper">
      
      <div className="top-bar">
        <div className="top-bar-left">
          <span className="contact-number">
            <i className="fas fa-phone-alt"></i>  +92 335 6471866
          </span>
          <div className="menu-icon" onClick={() => setIsMobileMenuOpen(true)}>
            &#9776; 
          </div>
        </div>

        {/* Desktop Social Icons */}
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

          {/* === PERFECT ORDER TAYYAR HAI === */}
          <li className={activeSection === 'home' || activeSection === 'hero' || (location.pathname === '/' && activeSection === '') ? 'active' : ''}>
            <a href="/#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          </li>
          
          <li className={activeSection === 'services' ? 'active' : ''}>
            <a href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          </li>
          
          <li className={activeSection === 'clients' ? 'active' : ''}>
            <a href="/#clients" onClick={() => setIsMobileMenuOpen(false)}>Clients</a>
          </li>
          
          <li className={activeSection === 'testimonials' ? 'active' : ''}>
            <a href="/#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
          </li>

          {/* About ab Case Study se bilkul pehle hai */}
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          </li>
          
          <li className={activeSection === 'case-study' ? 'active' : ''}>
            <a href="/#case-study" onClick={() => setIsMobileMenuOpen(false)}>Case Study</a>
          </li>
          
          {/* Mobile wala Yellow Contact Us Button */}
          <li className="mobile-contact-li">
            <Link to="/contact" className="mobile-contact-btn" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </li>

          {/* Mobile wale Social Icons */}
          <div className="sidebar-socials">
            <a href="https://www.facebook.com/Leadspktechnologies" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/leadspktechnologies/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/923356471866" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
        </ul>

        {/* Desktop wala Yellow Contact Button */}
        <Link to="/contact" className="contact-btn">Contact Us</Link>
      </nav>
      
    </header>
  );
};

export default Navbar;