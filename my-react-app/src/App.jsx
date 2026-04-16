import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import Clients from './components/Clients/Clients';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Footer from './components/Footer/Footer'; // Naya import
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Expertise />
      <Clients />
      <Testimonials />
      <About />
      <Footer /> {/* Akhir mein Footer add kiya */}
    </div>
  );
}

export default App;