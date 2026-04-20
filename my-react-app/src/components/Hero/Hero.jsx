import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import frontImg from '../../assets/front.png'; 
import bulbImg from '../../assets/bulb.png'; 

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); 
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

const Hero = () => {
  // === TYPEWRITER LOGIC STATES ===
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const textRef = useRef(null);

  const fullText = "We don't just market your brand — we build it from the ground up. From stunning websites and eye-catching graphic design to high-quality video editing and result-driven digital marketing, we help you stand out, attract the right audience, and turn ideas into real growth. Your vision, our strategy — let's create something powerful.";

  // Scroll aane par trigger karne wala Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTyping && displayedText.length === 0) {
          setIsTyping(true);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => { if (textRef.current) observer.unobserve(textRef.current); };
  }, [isTyping, displayedText.length]);

  // Typing Speed Logic (15ms per character)
  useEffect(() => {
    if (isTyping && displayedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 15);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, isTyping, fullText]);

  return (
    /* Yahan maine "reveal-zoom" class add kar di hai */
    <section id="home" className="hero-section reveal reveal-zoom">
      <div className="hero-content">
        
        <div className="hero-text-area">
          <div className="title-wrapper">
            <h2 className="hero-think">THINK</h2>
            
            <h1 className="hero-title">
              DIGIT
              <span className="bulb-span">
                <img src={bulbImg} alt="A" className="title-bulb-img" />
              </span>
              L
            </h1>

            <h3 className="hero-with">WITH US</h3>
          </div>

          <div className="hero-scroll-content">
            {/* Typewriter Paragraph */}
            <p className="hero-description" ref={textRef}>
              {displayedText}
              <span className="type-cursor">|</span>
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <h2><Counter end={50} duration={2000} />+</h2>
                <p>Engineers</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h2><Counter end={1000} duration={2000} />K+</h2>
                <p>Projects</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h2><Counter end={5} duration={2000} />+</h2>
                <p>Countries</p>
              </div>
            </div>
          </div>

        </div>

        <div className="hero-image-area">
          <img src={frontImg} alt="Front View" className="hero-front-img" />
        </div>

      </div>
    </section>
  );
};

export default Hero;