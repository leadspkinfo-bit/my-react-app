import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mainPos, setMainPos] = useState({ x: 0, y: 0 });
  const [trailPos, setTrailPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMainPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Trail follow logic (Naram aur late follow ke liye)
  useEffect(() => {
    const followMouse = () => {
      setTrailPos((prev) => ({
        x: prev.x + (mainPos.x - prev.x) * 0.1, // 0.1 speed se peeche ayega
        y: prev.y + (mainPos.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(followMouse);
    };
    const animId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animId);
  }, [mainPos]);

  return (
    <div className="cursor-wrapper">
      {/* Ye wo blurred saya hai jo peeche peeche chalega */}
      <div 
        className="cursor-trail-blur" 
        style={{ left: `${trailPos.x}px`, top: `${trailPos.y}px` }}
      />
      {/* Ye halka sa glow jo mouse k sath rahega */}
      <div 
        className="cursor-main-glow" 
        style={{ left: `${mainPos.x}px`, top: `${mainPos.y}px` }}
      />
    </div>
  );
};

export default CustomCursor;