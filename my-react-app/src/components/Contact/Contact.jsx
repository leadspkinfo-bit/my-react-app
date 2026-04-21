import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // Form handling logic
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    seeking: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "923356471866"; 
    const whatsappMessage = `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Seeking:* ${formData.seeking}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
    setFormData({ name: '', email: '', seeking: '', phone: '', message: '' });
  };

  // Address for Google Maps Link
  const fullAddress = "Bin Aziz Tourism and Consultants (Pvt.) Ltd., Office No. M1 - M3, 1st Floor, Abbas Trade Center, Main PIA Main Boulevard, near Javaid Nehari, Block E Pia Housing Scheme, Lahore, 54000, Pakistan";

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        <div className="contact-header reveal reveal-up">
          <h1 className="contact-main-title">
            Let’s Connect & <span className="highlight-yellow">Grow Together</span>
          </h1>
          <p className="contact-main-desc">
            Reach out today to discuss how we can scale your business through cutting-edge technology and creative strategy.
          </p>
        </div>

        {/* Info Cards Area */}
        <div className="info-cards-wrapper">
          
          {/* 1. Visit Our Hub (Google Maps Link) */}
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="info-card-link"
          >
            <div className="info-card reveal contact-card-1">
              <div className="icon-circle">📍</div>
              <div className="info-text">
                <h3>Visit Our Hub</h3>
                <p><strong>Bin Aziz Tourism, Lahore</strong></p>
              </div>
            </div>
          </a>

          {/* 2. Give Us a Call (Phone Dialer Link) */}
          <a href="tel:+923356471866" className="info-card-link">
            <div className="info-card reveal contact-card-2">
              <div className="icon-circle">📞</div>
              <div className="info-text">
                <h3>Give Us a Call</h3>
                <p><strong>+92 335 6471866</strong></p>
              </div>
            </div>
          </a>

          {/* 3. Send an Email (Mailto Link) */}
          <a href="mailto:Leadspk.info@gmail.com" className="info-card-link">
            <div className="info-card reveal contact-card-3">
              <div className="icon-circle">✉️</div>
              <div className="info-text">
                <h3>Send an Email</h3>
                <p><strong>Leadspk.info@gmail.com</strong></p>
              </div>
            </div>
          </a>

        </div>

        {/* --- FORM AREA --- */}
        <div className="contact-form-footer-area reveal reveal-up">
          <form className="glass-form" onSubmit={handleSubmit}>
            <h2 className="form-title">What are you looking for?</h2>
            <div className="form-grid">
              <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
              <input type="text" name="seeking" placeholder="What are you seeking?" className="full-width" value={formData.seeking} onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Phone" className="full-width" required value={formData.phone} onChange={handleChange} />
              <textarea name="message" placeholder="Message" rows="4" className="full-width" required value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;