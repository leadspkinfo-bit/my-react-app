import React, { useState, useEffect, useRef } from 'react';
import './Expertise.css';

import appIcon from '../../assets/app.png';
import webIcon from '../../assets/web.png';
import uiIcon from '../../assets/ui.png';
import videoIcon from '../../assets/video.png';
import graphicIcon from '../../assets/graphic.png';
import digitalIcon from '../../assets/digital.png';

const Expertise = () => {
  // === TYPEWRITER LOGIC STATES ===
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const textRef = useRef(null);

  const fullText = "We provide comprehensive services including software and app development, web design, and intuitive UI/UX. Our team also specializes in digital marketing, video editing, and graphic design to ensure your business excels in the digital landscape.";

  // Scroll Spy Logic (Jab paragraph screen par aaye tabhi typing shuru ho)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTyping && displayedText.length === 0) {
          setIsTyping(true);
        }
      },
      { threshold: 0.5 } // Jab 50% section dikh jaye
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => { if (textRef.current) observer.unobserve(textRef.current); };
  }, [isTyping, displayedText.length]);

  // Typing Speed Logic (15ms per character for smooth feel)
  useEffect(() => {
    if (isTyping && displayedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 15);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, isTyping, fullText]);

  const services = [
    { name: "App Development", icon: appIcon },
    { name: "Web Development", icon: webIcon },
    { name: "UI/UX", icon: uiIcon },
    { name: "Video Editing", icon: videoIcon },
    { name: "Graphic Designing", icon: graphicIcon },
    { name: "Digital Marketing", icon: digitalIcon },
  ];

  return (
    /* Yahan maine sirf "reveal-left" add kiya hai balance banane ke liye */
    <section id="services" className="expertise-section reveal reveal-left">
      <div className="expertise-content">
        <h2 className="section-title">Our Core Expertise</h2>
        
        {/* Typewriter Paragraph */}
        <p className="expertise-desc" ref={textRef}>
          {displayedText}
          <span className="type-cursor">|</span>
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-box">
                <img src={service.icon} alt={service.name} className="service-icon" />
              </div>
              {/* Text image mein hai isliye yahan nahi daala */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;