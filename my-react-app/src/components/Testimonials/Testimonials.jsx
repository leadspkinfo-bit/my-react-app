import React, { useState } from 'react';
import './Testimonials.css';

import asiaPic from '../../assets/asia.png';
import learnPic from '../../assets/learn.png';
import auraPic from '../../assets/aura.png';

const Testimonials = () => {
  // Pop-up handle karne ke liye state
  const [selectedReview, setSelectedReview] = useState(null);

  // 8 Cards ka data
  const reviews = [
    { 
      id: 1, 
      name: "ASIA KASHMIR", 
      text: "If you're looking for a company that can handle everything from high-end graphic design to backend web support, this is it. They’ve managed our digital presence for over a year, and the consistency is impressive. Whether it’s a quick marketing banner or a major site update, they deliver on time and with a level of professionalism that is hard to find.", 
      img: asiaPic 
    },
    { 
      id: 2, 
      name: "Learn-e-Travel", 
      text: "I’ve worked with many agencies, but the design team here is in a league of their own. They took our vague ideas for a brand refresh and turned them into a stunning UI/UX experience that our users absolutely love. The transition from graphic design to the final digital interface was flawless.", 
      img: learnPic 
    },
    { 
      id: 3, 
      name: "Aura Fragrance", 
      text: "We needed a complete overhaul of our e-commerce platform and these guys delivered beyond expectations. From website speed optimization to fixing our payment gateway issues, they handled everything seamlessly. Highly recommended for any business scaling up.", 
      img: auraPic 
    },
    { 
      id: 4, 
      name: "Tech Innovators", 
      text: "The best tech team we have ever collaborated with. They understand business logic as well as they understand code. Their custom software solution saved us hundreds of hours of manual work.", 
      img: asiaPic 
    },
    { 
      id: 5, 
      name: "Global Logistics", 
      text: "Outstanding service! They built a tracking dashboard for us that is not only visually appealing but also lightning fast. Their support team is always available when we need them.", 
      img: learnPic 
    },
    { 
      id: 6, 
      name: "Urban Estates", 
      text: "Leadspk completely transformed our real estate portal. The property search features are now incredibly smooth, and we've seen a 40% increase in customer engagement since the redesign.", 
      img: auraPic 
    },
    { 
      id: 7, 
      name: "Fitness Pro", 
      text: "They created an amazing booking system for our gym classes. The mobile responsiveness is perfect, and our members love how easy it is to use. Great job!", 
      img: asiaPic 
    },
    { 
      id: 8, 
      name: "Foodie Delight", 
      text: "From branding to social media management and our online ordering system, they have been our backbone. We couldn't have scaled to 3 branches without their digital expertise.", 
      img: learnPic 
    }
  ];

  // Endless scroll k liye array ko duplicate karna zaroori hota hai
  const doubledReviews = [...reviews, ...reviews];

  return (
    /* Yahan maine "reveal-up" add kar diya hai flow ke mutabiq */
    <section id="testimonials" className="testimonials-section reveal reveal-up">
      <div className="testimonials-container">
        <h1 className="testimonials-title">Testimonials</h1>

        {/* Endless Scroll Wrapper */}
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

      {/* === PIYARA SA POP-UP MODAL === */}
      {selectedReview && (
        <div className="modal-overlay" onClick={() => setSelectedReview(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedReview(null)}>
              &times;
            </button>
            <div className="modal-quote">“</div>
            <div className="modal-img-container">
              {selectedReview.img && <img src={selectedReview.img} alt={selectedReview.name} />}
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