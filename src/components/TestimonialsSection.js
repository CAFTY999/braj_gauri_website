import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TestimonialsSection.css'; // Importing the CSS for the section

const TestimonialsSection = () => {
  useEffect(() => {
    // Automatic Scrolling for testimonials
    const scrollInterval = 3000;
    const scrollAmount = 200;

    const intervalId = setInterval(() => {
      const testimonialsGrid = document.querySelector('.testimonials-grid');
      testimonialsGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }, scrollInterval);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <p className="eyebrow">OUR COMMUNITY IMPACT</p>
        <h2>What people are saying</h2>
        <p className="subheading">Stories of change and hope</p>
      </div>

      <div className="testimonials-grid">
        {/* Testimonial Card 1 */}
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src="avatar1.jpg" alt="Alex Johnson" className="avatar" />
            <div>
              <h4>Alex Johnson</h4>
              <p className="role">Community Outreach</p>
            </div>
          </div>
          <p className="testimonial-text">
            The support from this organization has been life-changing. Their dedication to uplifting communities is truly inspiring.
          </p>
        </div>

        {/* Testimonial Card 2 */}
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src="avatar2.jpg" alt="Taylor Smith" className="avatar" />
            <div>
              <h4>Taylor Smith</h4>
              <p className="role">Healthcare Initiatives</p>
            </div>
          </div>
          <p className="testimonial-text">
            Thanks to their efforts, we've seen significant improvements in healthcare access for underprivileged families.
          </p>
        </div>

        {/* Testimonial Card 3 */}
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src="avatar3.jpg" alt="Jordan Lee" className="avatar" />
            <div>
              <h4>Jordan Lee</h4>
              <p className="role">Education Support</p>
            </div>
          </div>
          <p className="testimonial-text">
            Their commitment to education has opened doors for countless children, providing them with brighter futures.
          </p>
        </div>

        {/* Testimonial Card 4 */}
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src="avatar3.jpg" alt="Jordan Lee" className="avatar" />
            <div>
              <h4>Jordan Lee</h4>
              <p className="role">Education Support</p>
            </div>
          </div>
          <p className="testimonial-text">
            Their commitment to education has opened doors for countless children, providing them with brighter futures.
          </p>
        </div>
      </div>

      {/* Add Comment Button */}
      <div className="add-comment-card">
        <Link to="/contact"> 
          <button className="add-comment-btn">Add a Comment</button>
        </Link>
      </div>
    </section>
  );
};

export default TestimonialsSection;
