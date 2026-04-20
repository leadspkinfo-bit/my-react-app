import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import successImg from '../../assets/succes.png';

const About = () => {
  // Typing Effect ke liye states
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const textRef = useRef(null);

  // Text ko 3 hisson mein toda hai taake yellow highlight wesa hi rahe
  const part1 = "At ";
  const part2 = "Leadspktechnologies";
  const part3 = ", we help businesses scale through innovative technology and strategic solutions. Having partnered with numerous companies, we have a proven track record of driving growth and transforming visions into high-impact market results.";
  const fullText = part1 + part2 + part3;

  // Scroll Spy Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTyping && displayedText.length === 0) {
          setIsTyping(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, [isTyping, displayedText.length]);

  // Typing speed logic
  useEffect(() => {
    if (isTyping && displayedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 15); 
      
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, isTyping, fullText]);

  // Highlight handle karne ka function
  const renderText = () => {
    const p1 = displayedText.slice(0, part1.length);
    const p2 = displayedText.slice(part1.length, part1.length + part2.length);
    const p3 = displayedText.slice(part1.length + part2.length);

    return (
      <>
        {p1}
        {p2.length > 0 && <span className="highlight-yellow">{p2}</span>}
        {p3}
        <span className="type-cursor">|</span> 
      </>
    );
  };

  return (
    /* Yahan maine "reveal-zoom" add kar diya hai final impact ke liye */
    <section id="about" className="about-section reveal reveal-zoom">
      <div className="about-container">
        
        {/* Left Side: Text Area */}
        <div className="about-left">
          <h2 className="about-title-top">Driving Digital</h2>
          <h1 className="about-title-bottom">Success</h1>
          
          <p className="about-desc" ref={textRef}>
            {renderText()}
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