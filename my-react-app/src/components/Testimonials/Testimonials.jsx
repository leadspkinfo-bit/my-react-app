import React, { useState, useEffect } from 'react';
import './Testimonials.css';

// === SAARI TASWEERON KE IMPORTS (Clients.jsx se liye gaye hain) ===
import mandiImg from '../../assets/mandi.png';
import asiaImg from '../../assets/asia.png';
import musafirronImg from '../../assets/musafiroon.png'; 
import binazizImg from '../../assets/binaziz.png';
import pakImg from '../../assets/pak.png';
import learnImg from '../../assets/learn.png';
import auraImg from '../../assets/aura.png';

const Testimonials = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    if (selectedReview) {
      document.body.classList.add('modal-open-lock');
    } else {
      document.body.classList.remove('modal-open-lock');
    }
    return () => {
      document.body.classList.remove('modal-open-lock');
    };
  }, [selectedReview]);

  // === 7 REVIEWS WITH EXACT IMAGES ===
  const reviews = [
    { 
      id: 1, 
      name: "Maindi", 
      text: "Hamari company ki nayi branding (Logo aur Identity) ke liye LeadsPK ka kaam la-jawab hai. Unho ne hamare vision ko bohot khoobsurti se visuals mein convert kiya. Creative aur professional team!", 
      img: mandiImg 
    },
    { 
      id: 2, 
      name: "ASIA KASHMIR", 
      text: "LeadsPK hamare social media handles ko manage kar rahi hai aur engagement rates mein wazay farq nazar aa raha hai. Inki content strategy aur creative captions hamari brand voice ke sath bilkul match karti hain.", 
      img: asiaImg 
    },
    { 
      id: 3, 
      name: "Musafiroon", 
      text: "Hamein apni brand ke liye ek seamless mobile app chahiye thi aur LeadsPK ne hamari umeedon se barh kar kaam kiya. App ka interface bohot smooth hai aur backend management bohot easy hai. Great job team!", 
      img: musafirronImg 
    },
    { 
      id: 4, 
      name: "Bin Aziz", 
      text: "Hamein apni promotional campaigns ke liye high-quality video editing ki zaroorat thi. LeadsPK ne hamein aisi videos bana kar dein jo na sirf eye-catching hain balkay hamari sales conversion mein bhi help kar rahi hain.", 
      img: binazizImg 
    },
    { 
      id: 5, 
      name: "Pak", 
      text: "LeadsPK sirf ek vendor nahi balkay ek behtareen strategic partner hai. Inki IT consultancy ne hamein sahi tools aur technologies choose karne mein madad di jis se hamara kaam kaafi efficient ho gaya hai.", 
      img: pakImg 
    },
    { 
      id: 6, 
      name: "Learn-e-Travel", 
      text: "LeadsPK ne hamari business website ko bilkul naye siray se design kiya. Inki team ne na sirf design ko modern banaya balkay site ki speed aur user experience bhi behtareen hai. Highly recommended for professional web solutions!", 
      img: learnImg 
    },
    { 
      id: 7, 
      name: "Aura Fragrance", 
      text: "We needed a complete overhaul of our e-commerce platform and these guys delivered beyond expectations. From website speed optimization to fixing our payment gateway issues, they handled everything seamlessly. Highly recommended for any business scaling up.", 
      img: auraImg 
    }
  ];

  const doubledReviews = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="testimonials-section reveal reveal-up">
      <div className="testimonials-container">
        <h1 className="testimonials-title">Testimonials</h1>

        <div className="testimonials-slider-wrapper">
          <div className="testimonials-track">
            {doubledReviews.map((review, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                onClick={() => setSelectedReview(review)}
              >
                <div className="quote-icon top-quote">“</div>
                
                <div className="testimonial-scroll-area">
                  <p className="testimonial-text">{review.text}</p>
                </div>
                
                <div className="profile-wrapper">
                  <div className="profile-img-container">
                    {review.img ? (
                      <img src={review.img} alt={review.name} className="profile-pic" />
                    ) : (
                      <div style={{ background: '#333', width: '100%', height: '100%' }}></div>
                    )}
                  </div>
                </div>
                
                <h4 className="client-name">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POP-UP MODAL */}
      {selectedReview && (
        <div className="modal-overlay" onClick={() => setSelectedReview(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedReview(null)}>
              &times;
            </button>
            <div className="modal-quote">“</div>
            <div className="modal-img-container">
              {selectedReview.img ? (
                <img src={selectedReview.img} alt={selectedReview.name} />
              ) : (
                <div style={{ background: '#333', width: '100%', height: '100%' }}></div>
              )}
            </div>
            <h3 className="modal-name">{selectedReview.name}</h3>
            <p className="modal-text">{selectedReview.text}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;