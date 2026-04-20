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
    const reveals = document.querySelectorAll(".reveal");
    
    // YAHAN PERFORMANCE FIX HAI: Scroll Event ki jagah IntersectionObserver use kiya hai
    // Ye browser ko hang nahi karta aur 60fps smooth scroll deta hai
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

    // Saare elements ko observe karna shuru karo
    reveals.forEach((reveal) => {
      observer.observe(reveal);
    });

    // Cleanup function taake memory leak na ho
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