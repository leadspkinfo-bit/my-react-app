import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor/CustomCursor'; 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import Clients from './components/Clients/Clients';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const showFooter = location.pathname !== '/contact';

  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        
        // Hero section (Right/Zoom) ke liye trigger foran hona chahiye
        // Baaki sections ke liye 150px gap sahi hai
        const isHero = reveals[i].classList.contains('reveal-right') || reveals[i].classList.contains('reveal-zoom');
        const elementVisible = isHero ? -100 : 150; 

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
          // remove("active") nahi kiya taake animation sirf aik dafa ho
        }
      }
    };

    // Scroll event listener
    window.addEventListener("scroll", revealElements);
    
    // Page load triggers
    revealElements(); // Foran check karein
    const timer = setTimeout(revealElements, 150); // Thora delay CSS render k baad

    return () => {
      window.removeEventListener("scroll", revealElements);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Expertise />
            <Clients />
            <Testimonials />
            <About />
          </>
        } />
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