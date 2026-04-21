import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // 1. Form ka data sambhalne ke liye State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    seeking: '',
    phone: '',
    message: ''
  });

  // 2. Input change handle karna
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Form Submit aur WhatsApp Redirect Logic
  const handleSubmit = (e) => {
    e.preventDefault();

    // Apna WhatsApp Number yahan likhein (Country code ke sath, bina '+' ke)
    const whatsappNumber = "923356471866"; 

    // Message ka format tayyar karna
    const whatsappMessage = `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Seeking:* ${formData.seeking}%0A` +
      `*Message:* ${formData.message}`;

    // WhatsApp ka URL banana
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Naye tab mein WhatsApp open karna
    window.open(whatsappURL, '_blank');

    // Form clear kar dena
    setFormData({ name: '', email: '', seeking: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Header - Desktop & Mobile dono pe neeche se upar aayega */}
        <div className="contact-header reveal reveal-up">
          <h1 className="contact-main-title">
            Let’s Connect & <span className="highlight-yellow">Grow Together</span>
          </h1>
          <p className="contact-main-desc">
            Reach out today to discuss how we can scale your business through cutting-edge technology and creative strategy.
          </p>
        </div>

        {/* Info Cards */}
        <div className="info-cards-wrapper">
          <div className="info-card reveal contact-card-1">
            <div className="icon-circle">📍</div>
            <div className="info-text">
              <h3>Visit Our Hub</h3>
              <p><strong>Lahore, Pakistan</strong></p>
            </div>
          </div>
          <div className="info-card reveal contact-card-2">
            <div className="icon-circle">📞</div>
            <div className="info-text">
              <h3>Give Us a Call</h3>
              <p><strong>+92 335 6471866</strong></p>
            </div>
          </div>
          <div className="info-card reveal contact-card-3">
            <div className="icon-circle">✉️</div>
            <div className="info-text">
              <h3>Send an Email</h3>
              <p><strong>Leadspk.info@gmail.com</strong></p>
            </div>
          </div>
        </div>

        {/* --- FORM AREA --- */}
        <div className="contact-form-footer-area reveal reveal-up">
          {/* Form tag mein onSubmit handler add kiya hai */}
          <form className="glass-form" onSubmit={handleSubmit}>
            <h2 className="form-title">What are you looking for?</h2>
            <div className="form-grid">
              
              {/* Inputs ko state ke sath jor diya gaya hai */}
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                required 
                value={formData.name} 
                onChange={handleChange} 
              />
              
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                value={formData.email} 
                onChange={handleChange} 
              />
              
              <input 
                type="text" 
                name="seeking" 
                placeholder="What are you seeking?" 
                className="full-width" 
                value={formData.seeking} 
                onChange={handleChange} 
              />
              
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone" 
                className="full-width" 
                required /* Phone number zaroori kar diya taake banda WhatsApp pe available ho */
                value={formData.phone} 
                onChange={handleChange} 
              />
              
              <textarea 
                name="message" 
                placeholder="Message" 
                rows="4" 
                className="full-width" 
                required
                value={formData.message} 
                onChange={handleChange} 
              ></textarea>
              
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;