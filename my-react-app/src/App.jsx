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
        const elementVisible = 150; 

        // Agar element screen par aa gaya hai
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
          // remove("active") yahan se hata diya gaya hai taake effect bar bar na ho
        }
      }
    };

    window.addEventListener("scroll", revealElements);
    
    // Page load hone par thora delay de kar check karen taake initial elements active ho jayen
    const timer = setTimeout(revealElements, 200); 

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