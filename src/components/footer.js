import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Our mission</h4>
            <ul>
              <li><a href="#">Education</a></li>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Donate</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Get involved</h4>
            <ul>
              <li><a href="#">Events</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Reports</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Media</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 All rights reserved</p>
          <div className="footer-logo">
            <img src="/images/image_2.gif" alt="Braj Gauri Trust Logo" />
          </div>
          <div className="footer-socials">
            <a href="#"><i className="fa fa-facebook-f"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
