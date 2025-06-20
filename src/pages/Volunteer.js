import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "./Volunteer.css";
import confetti from 'canvas-confetti';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    zip: "",
    phone: "",
    updates: false,
    about: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    confetti({
      particleCount: 50,
      spread: 100,
      origin: { y: 0.8 },
    });

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <>
      <Navbar />
      <div className="volunteer-section">
        <div className="volunteer-container">
          <div className="image-box">
            <img
              src="/images/image_1.jpg"
              alt="Volunteer"
              className="volunteer-image"
            />
            <p className="quote">
              “The best way to find yourself is to lose yourself in the service of others.”
              <br />
              <span className="author">– Gandhi</span>
            </p>
          </div>

          <div className="form-box">
            <h2>Become a Volunteer</h2>
            <p>Fill out the form and we’ll contact you soon!</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip / Postal Code *"
                required
                value={formData.zip}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="updates"
                  checked={formData.updates}
                  onChange={handleChange}
                />
                Sign me up for text message updates
              </label>
              <textarea
                name="about"
                placeholder="Anything we should know about you?"
                rows="4"
                value={formData.about}
                onChange={handleChange}
              />
              <button type="submit">Join Now</button>
            </form>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="center-popup-message">
          <p>🎉 Thank you! We will contact you soon.</p>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Volunteer;
