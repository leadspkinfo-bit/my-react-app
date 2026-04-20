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
        
        // --- MOBILE FIX YAHAN HAI ---
        const isMobile = window.innerWidth < 992;
        
        const isImmediate = reveals[i].classList.contains('reveal-right') || 
                            reveals[i].classList.contains('reveal-left') || 
                            reveals[i].classList.contains('reveal-zoom');
        
        // Agar mobile hai toh visible gap sirf 50px rakho taake foran trigger ho
        const elementVisible = isMobile ? 50 : (isImmediate ? -50 : 150); 

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };

    // Scroll listener attach karna
    window.addEventListener("scroll", revealElements);
    
    // Page load triggers
    revealElements(); 
    const timer1 = setTimeout(revealElements, 100); 
    const timer2 = setTimeout(revealElements, 500); 

    return () => {
      window.removeEventListener("scroll", revealElements);
      clearTimeout(timer1);
      clearTimeout(timer2);
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