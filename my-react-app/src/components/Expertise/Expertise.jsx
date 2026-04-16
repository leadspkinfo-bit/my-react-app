import React from 'react';
import './Expertise.css';

import appIcon from '../../assets/app.png';
import webIcon from '../../assets/web.png';
import uiIcon from '../../assets/ui.png';
import videoIcon from '../../assets/video.png';
import graphicIcon from '../../assets/graphic.png';
import digitalIcon from '../../assets/digital.png';

const Expertise = () => {
  const services = [
    { name: "App Development", icon: appIcon },
    { name: "Web Development", icon: webIcon },
    { name: "UI/UX", icon: uiIcon },
    { name: "Video Editing", icon: videoIcon },
    { name: "Graphic Designing", icon: graphicIcon },
    { name: "Digital Marketing", icon: digitalIcon },
  ];

  return (
    <section id="services" className="expertise-section">
      <div className="expertise-content">
        <h2 className="section-title">Our Core Expertise</h2>
        
        <p className="expertise-desc">
          We provide comprehensive services including software and app development, 
          web design, and intuitive UI/UX. Our team also specializes in digital 
          marketing, video editing, and graphic design to ensure your business 
          excels in the digital landscape.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-box">
                <img src={service.icon} alt={service.name} className="service-icon" />
              </div>
              {/* Yahan se text hata diya gaya hai kyunke wo aapki image mein mojood hai */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;