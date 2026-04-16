import React from 'react';
import './Testimonials.css';

import asiaPic from '../../assets/asia.png';
import learnPic from '../../assets/learn.png';
import auraPic from '../../assets/aura.png';

const Testimonials = () => {
  const reviews = [
    { 
      id: 1, 
      name: "ASIA KASHMIR", 
      text: "If you're looking for a company that can handle everything from high-end graphic design to backend web support, this is it. They’ve managed our digital presence for over a year, and the consistency is impressive. Whether it’s a quick marketing banner or a major site update, they deliver on time and with a level of professionalism that is hard to find. Highly recommended for any business scaling up.", 
      img: asiaPic 
    },
    { 
      id: 2, 
      name: "Learn-e-Travel", 
      text: "I’ve worked with many agencies, but the design team here is in a league of their own. They took our vague ideas for a brand refresh and turned them into a stunning UI/UX experience that our users absolutely love. The transition from graphic design to the final digital interface was flawless. They have an incredible eye for detail and a deep understanding of user behavior.", 
      img: learnPic 
    },
    { 
      id: 3, 
      name: "Aura Fragrance", 
      text: "If you're looking for a company that can handle everything from high-end graphic design to backend web support, this is it. They’ve managed our digital presence for over a year, and the consistency is impressive. Whether it’s a quick marketing banner or a major site update, they deliver on time and with a level of professionalism that is hard to find. Highly recommended for any business scaling up.", 
      img: auraPic 
    },
    { id: 4, text: "Your feedback text goes here.", name: "Client Name", img: "" },
    { id: 5, text: "Your feedback text goes here.", name: "Client Name", img: "" },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <h1 className="testimonials-title">Testimonials</h1>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={review.id} className={`testimonial-card card-${index + 1}`}>
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
                {/* Bottom quote div yahan se nikaal diya hai */}
              </div>
              
              <h4 className="client-name">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;