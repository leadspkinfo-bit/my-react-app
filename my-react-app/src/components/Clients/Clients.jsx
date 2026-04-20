import React from 'react';
import './Clients.css';

// Tasweerein imports
import mandiImg from '../../assets/mandi.png';
import musafirronImg from '../../assets/musafiroon.png'; 
import binazizImg from '../../assets/binaziz.png';
import alhadiImg from '../../assets/alhadi.png';
import stateImg from '../../assets/state.png';
import binImg from '../../assets/bin.png';
import pakImg from '../../assets/pak.png';
import asiaImg from '../../assets/asia.png';
import dawatImg from '../../assets/dawat.png';
import learnImg from '../../assets/learn.png';
import auraImg from '../../assets/aura.png';
import buraqImg from '../../assets/buraq.png';
import teamImg from '../../assets/team.png'; 

const Clients = () => {
  const clientLogos = [
    { id: 1, img: mandiImg },
    { id: 2, img: musafirronImg },
    { id: 3, img: binazizImg },
    { id: 4, img: alhadiImg },
    { id: 5, img: stateImg },
    { id: 6, img: binImg },
    { id: 7, img: pakImg },
    { id: 8, img: asiaImg }, 
    { id: 9, img: dawatImg },
    { id: 10, img: learnImg },
    { id: 11, img: auraImg },
    { id: 12, img: buraqImg },
  ];

  return (
    // Section ID "clients" aur class "reveal" add kar di hai
    <section id="clients" className="clients-section reveal">
      <div className="clients-container">
        
        {/* Left Side Content */}
        <div className="clients-left">
          <div className="clients-title-area">
            <h4 className="our-text">OUR</h4>
            <h1 className="clients-main-title">Clients</h1>
          </div>

          <div className="logos-grid">
            {clientLogos.map((logo) => (
              <div key={logo.id} className="client-logo-box">
                {logo.img && (
                  <img src={logo.img} alt={`Client ${logo.id}`} className="client-img" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Team Image */}
        <div className="clients-right">
           <img 
             src={teamImg} 
             alt="Our Team" 
           />
        </div>

      </div>
    </section>
  );
};

export default Clients;