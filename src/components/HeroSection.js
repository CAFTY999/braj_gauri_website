import React from 'react';
import { Link } from 'react-router-dom'; 
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section>
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Children are<br />
            our future<br />
            and We care for<br />
            them
          </h1>
          <p>
            Join us in uplifting communities with education, healthcare.
            Together, we can make a difference.
          </p>
          <div className="hero-buttons">
            <Link to="/volunteer">
              <button>Get involved</button>
            </Link>
            <Link to="/events">
              <button>Learn more</button>
            </Link>
          </div>
        </div>
        <div className="hero-images">
          <img src="/images/image_5.jpg" alt="Smiling child" />
          <img src="/images/image_5.jpg" alt="Smiling child" />
          <img src="/images/image_5.jpg" alt="Smiling child" />
          <img src="/images/image_5.jpg" alt="Smiling child" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
