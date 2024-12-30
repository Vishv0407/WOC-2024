// src/components/Contact/Contact.jsx
import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left side - Contact Form */}
          <div className="contact-form-container">
            <h2 className="contact-title">Contact Us</h2>
            <ContactUs />
          </div>

          {/* Right side - Social Media Icons */}
          <div className="social-icons-container">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;