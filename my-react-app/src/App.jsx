import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// === NAYA JADOO YAHAN IMPORT KIYA HAI ===
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

  // === KAMAL KI REVEAL ANIMATION LOGIC ===
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100; // 100px scroll karne par show ho jayega

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", revealElements);
    // Ek dafa khud chala dain taake page load hote hi top wale elements dikh jayen
    revealElements(); 

    return () => window.removeEventListener("scroll", revealElements);
  }, [location.pathname]);

  return (
    <div className="App">
      
      {/* === GLOWING CURSOR YAHAN CALL KAR DIYA === */}
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