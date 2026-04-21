import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../../assets/logo.png'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // === SCROLL SPY LOGIC (Sirf Home Page k liye) ===
  useEffect(() => {
    // Agar Contact ya Case Study page par hain, toh scroll spy ko rok do
    if (location.pathname !== '/') return;

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

  // === SMOOTH SCROLL LOGIC ===
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Click pe mobile menu band ho jaye

    if (location.pathname !== '/') {
      // Agar kisi aur page pe hain, toh wapas home pe aao aur us hissay pe jao
      navigate(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Agar home page pe hi hain, toh direct smooth scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
          <li className={location.pathname === '/' && (activeSection === 'home' || activeSection === 'hero' || activeSection === '') ? 'active' : ''}>
            <a href="/#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          </li>
          
          <li className={location.pathname === '/' && activeSection === 'services' ? 'active' : ''}>
            <a href="/#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
          </li>
          
          <li className={location.pathname === '/' && activeSection === 'clients' ? 'active' : ''}>
            <a href="/#clients" onClick={(e) => handleNavClick(e, 'clients')}>Clients</a>
          </li>
          
          <li className={location.pathname === '/' && activeSection === 'testimonials' ? 'active' : ''}>
            <a href="/#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Testimonials</a>
          </li>

          <li className={location.pathname === '/' && activeSection === 'about' ? 'active' : ''}>
            <a href="/#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          </li>
          
          {/* === YAHAN FIX HAI: Case Study ab Alag Page hai === */}
          <li className={location.pathname === '/case-study' ? 'active' : ''}>
            <Link to="/case-study" onClick={() => setIsMobileMenuOpen(false)}>Case Study</Link>
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