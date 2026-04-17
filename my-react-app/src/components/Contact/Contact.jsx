import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Header aur Info Cards (Upar wala hissa) */}
        <div className="contact-header">
          <h1 className="contact-main-title">
            Let’s Connect & <span className="highlight-yellow">Grow Together</span>
          </h1>
          <p className="contact-main-desc">
            Reach out today to discuss how we can scale your business through cutting-edge technology and creative strategy.
          </p>
        </div>

        <div className="info-cards-wrapper">
          <div className="info-card">
            <div className="icon-circle">📍</div>
            <div className="info-text">
              <h3>Visit Our Hub</h3>
              <p><strong>Lahore, Pakistan</strong></p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon-circle">📞</div>
            <div className="info-text">
              <h3>Give Us a Call</h3>
              <p><strong>+92 335 6471866</strong></p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon-circle">✉️</div>
            <div className="info-text">
              <h3>Send an Email</h3>
              <p><strong>Leadspk.info@gmail.com</strong></p>
            </div>
          </div>
        </div>

        {/* --- FORM AREA (Ab ye Footer ki jagah neechay hai) --- */}
        <div className="contact-form-footer-area">
          <form className="glass-form">
            <h2 className="form-title">What are you looking for?</h2>
            <div className="form-grid">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="What are you seeking?" className="full-width" />
              <input type="text" placeholder="Phone" className="full-width" />
              <textarea placeholder="Message" rows="4" className="full-width"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;