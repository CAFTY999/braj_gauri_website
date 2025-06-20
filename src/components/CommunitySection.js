import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './CommunitySection.css';

const CommunitySection = () => {
  const gridRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index) => {
    if (!gridRef.current) return;
    const cardWidth = gridRef.current.firstChild.offsetWidth;
    gridRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % 4;
        scrollToCard(nextIndex);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    if (!gridRef.current) return;
    const scrollLeft = gridRef.current.scrollLeft;
    const cardWidth = gridRef.current.firstChild.offsetWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="text-box">
          <h2 className="main-heading">
            Empowering communities through <span className="highlight">compassion</span>
            <span className="normal"> and action for a brighter future</span>
          </h2>
          <p className="paragraph">
            Join us in our mission to uplift the underprivileged and create lasting change.
            Together, we can make a difference in education, healthcare, and skills development.
          </p>
        </div>

        <div className="grid" id="grid" ref={gridRef} onScroll={handleScroll}>
  <div className="card">
    <Link to="/about" className="card-link">
      <button className="card-button">Who we are ??</button>
      <img src="/images/who.jpeg" alt="Event" className="card-image" />
    </Link>
  </div>
  <div className="card">
    <Link to="/news" className="card-link">
      <button className="card-button">Events</button>
      <img src="/images/new_image.jpg" alt="Event" className="card-image" />
    </Link>
  </div>
  <div className="card">
    <Link to="/gallery" className="card-link">
      <button className="card-button">Gallery</button>
      <img src="/images/event1.jpg" alt="Event" className="card-image" />
    </Link>
  </div>
  <div className="card">
    <Link to="/volunteer" className="card-link">
      <button className="card-button">Volunteer</button>
      <img src="/images/image_1.jpg" alt="Event" className="card-image" />
    </Link>
  </div>
</div>


        <div className="dots" id="dots">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`dot ${activeIndex === i ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
