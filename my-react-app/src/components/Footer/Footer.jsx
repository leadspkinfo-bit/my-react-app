import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';

const Footer = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage("Sending... ⏳");

    emailjs.sendForm('service_qr4qp7b', 'template_7n8liqs', form.current, 'yJkxdQGxx0rvpqwR9')
      .then((result) => {
          setStatusMessage("Message Sent Successfully! ✅");
          form.current.reset(); 
          setTimeout(() => {
            setStatusMessage("");
          }, 4000);
      }, (error) => {
          setStatusMessage("Error: Message not sent. ❌");
          setTimeout(() => {
            setStatusMessage("");
          }, 4000);
          console.log(error.text);
      });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* LEFT SIDE: Glass Form */}
        <div className="footer-form-area">
          <h2 className="form-title">What are you looking for?</h2>
          
          <div className="glass-form-box">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              
              <div className="input-row">
                <input type="text" name="user_name" placeholder="Name" required />
                <input type="email" name="user_email" placeholder="Email" required />
              </div>
              
              <input type="text" name="seeking" placeholder="What are you seeking?" className="full-width" />
              <input type="text" name="phone" placeholder="Phone" className="full-width" />
              <input type="text" name="budget" placeholder="Your Budget?" className="full-width" />
              
              <textarea name="message" placeholder="Requirements" rows="4" className="full-width" required></textarea>
              
              <div className="form-actions-vertical">
                <div className="file-upload-area">
                  <label className="grey-pill-btn file-btn">
                    Choose file
                    <input type="file" name="my_file" style={{display: 'none'}} />
                  </label>
                  <small className="file-limit-text">Max file size: 50Kb</small>
                </div>

                <div className="submit-area">
                  <button type="submit" className="grey-pill-btn submit-btn">Discuss your Needs</button>
                  {statusMessage && <span className="status-popup">{statusMessage}</span>}
                </div>
              </div>

            </form>
          </div>
        </div>

        {/* RIGHT SIDE: Info Links */}
        <div className="footer-info-area">
          <div className="info-column">
            <h3>QUICK LINKS</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#clients">Clients</a></li>
            </ul>
          </div>
          <div className="info-column">
            <h3>SERVICES</h3>
            <ul className="footer-links">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Graphic Design</a></li>
              <li><a href="#services">Digital Marketing</a></li>
              <li><a href="#services">SEO Optimization</a></li>
            </ul>
          </div>
          <div className="info-column get-in-touch">
            <h3>GET IN TOUCH</h3>
            <p><span className="yellow-icon">📍</span> Lahore, Pakistan</p>
            <p><span className="yellow-icon">📞</span> +92 335 6471866</p>
            <p><span className="yellow-icon">✉️</span> Leadspk.info@gmail.com</p>
          </div>
        </div>

      </div>

      {/* ================= NAYA BOTTOM FOOTER ================= */}
      <div className="bottom-footer">
        <div className="bottom-footer-content">
          <div className="brand-info">
            <h2>LEADS<span>PK</span></h2>
            <p>Innovating Digital Ecosystems.</p>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} LeadsPK Technologies. All Rights Reserved.</p>
          </div>
          <div className="bottom-socials">
            <a href="https://www.facebook.com/Leadspktechnologies" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/leadspktechnologies/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/923356471866" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;