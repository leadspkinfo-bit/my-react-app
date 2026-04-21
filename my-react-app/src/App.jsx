import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor/CustomCursor'; 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import Clients from './components/Clients/Clients';
import Testimonials from './components/Testimonials/Testimonials';
import CaseStudy from './components/CaseStudy/CaseStudy'; 
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  // Contact page ke ilawa sab pages par footer dikhega (Case Study par bhi dikhega)
  const showFooter = location.pathname !== '/contact';

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, {
      rootMargin: "0px 0px -50px 0px", 
      threshold: 0.1 
    });

    reveals.forEach((reveal) => {
      observer.observe(reveal);
    });

    return () => {
      reveals.forEach((reveal) => {
        observer.unobserve(reveal);
      });
    };
  }, [location.pathname]); 

  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Routes>
        {/* === HOME PAGE (Bina Case Study ke) === */}
        <Route path="/" element={
          <>
            <Hero />
            <Expertise />
            <Clients />
            <Testimonials />
            <About />
          </>
        } />
        
        {/* === ALAG PAGES === */}
        <Route path="/case-study" element={<CaseStudy />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;