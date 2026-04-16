import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';

const Footer = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(""); // Naya: Message dikhane ke liye

  const sendEmail = (e) => {
    e.preventDefault();

    // Jaise hi button click ho, foran "Sending..." likha aa jaye
    setStatusMessage("Sending... ⏳");

    emailjs.sendForm('service_qr4qp7b', 'template_7n8liqs', form.current, 'yJkxdQGxx0rvpqwR9')
      .then((result) => {
          // Send hone ke baad ka message
          setStatusMessage("Message Sent Successfully! ✅");
          form.current.reset(); 
          
          // 4 second baad message khud gayab ho jayega
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
              
              {/* Action Buttons & Status */}
              <div className="form-actions-vertical">
                <div className="file-upload-area">
                  <label className="grey-pill-btn file-btn">
                    Choose file
                    <input type="file" name="my_file" style={{display: 'none'}} />
                  </label>
                  {/* NAYA: 50Kb Text */}
                  <small className="file-limit-text">Max file size: 50Kb</small>
                </div>

                <div className="submit-area">
                  <button type="submit" className="grey-pill-btn submit-btn">Discuss your Needs</button>
                  {/* NAYA: Custom Status Message jo button ke sath aayega */}
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
          </div>
          <div className="info-column">
            <h3>SERVICES</h3>
          </div>
          <div className="info-column get-in-touch">
            <h3>GET IN TOUCH</h3>
            <p><span className="yellow-icon">📍</span> Lahore. Pakistan</p>
            <p><span className="yellow-icon">📞</span> +92 335 6471866</p>
            <p><span className="yellow-icon">✉️</span> Leadspk.info@gmail.com</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;