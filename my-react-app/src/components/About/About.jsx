import React from 'react';
import './About.css';
import successImg from '../../assets/succes.png'; // Image import kar li

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left Side: Text Area */}
        <div className="about-left">
          <h2 className="about-title-top">Driving Digital</h2>
          <h1 className="about-title-bottom">Success</h1>
          <p className="about-desc">
            At <span className="highlight-yellow">Leadspktechnologies</span>, we help businesses 
            scale through innovative technology and strategic solutions. Having partnered with 
            numerous companies, we have a proven track record of driving growth and 
            transforming visions into high-impact market results.
          </p>
        </div>

        {/* Right Side: Image Area */}
        <div className="about-right">
          <img 
            src={successImg} 
            alt="Driving Digital Success" 
            className="about-img" 
          />
        </div>

      </div>
    </section>
  );
};

export default About;