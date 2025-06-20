import React from 'react';
import './ContactSection.css'; // Assuming you want to keep the styles in a separate file.

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <p className="contact-eyebrow">REACH OUT TO US</p>
          <h2 className="contact-title">We’d love to hear from you</h2>
          <p className="contact-subtitle">Our dedicated team is here to assist you.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email us</h3>
            <p>We're here to support you.</p>
            <p>brajgauri.trust@gmail.com</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3>Call us</h3>
            <p>Head Office - Tel No-022-26125301/26125191</p>
            <p>Orissa Office - Tel No-0671-2353668</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Visit us</h3>
            <p>Head Office: 411, Sai Chamber, 4th Floor, Opposite Railway Station, Santacruz (East), Mumbai-400056.</p>
            <p>Orissa Office: P.O. - Nischintakoili, PS - Salipur, Dist - Cuttack, Tel. No-0671-2353668</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
