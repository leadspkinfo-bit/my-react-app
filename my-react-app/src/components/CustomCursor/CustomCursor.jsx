import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Mouse movement track karne ke liye
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop (Smooth Follow effect ke liye)
    const updatePosition = () => {
      // 0.1 ki value se glow thora peechay chalta hai (trailing effect)
      positionRef.current.x += (mouseRef.current.x - positionRef.current.x) * 0.1;
      positionRef.current.y += (mouseRef.current.y - positionRef.current.y) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${positionRef.current.x}px`;
        cursorRef.current.style.top = `${positionRef.current.y}px`;
      }

      requestAnimationFrame(updatePosition);
    };

    const animationId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor-glow-aura"></div>
  );
};

export default CustomCursor;