import React from 'react';
import './Contact.css';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
const MailIcon = () => (
  <svg
    fill="white"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const CallIcon = () => (
  <svg
    fill="white"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.73 3.85.73a1 1 0 011 1v3.34a1 1 0 01-.91 1A19.91 19.91 0 014 4.92a1 1 0 011-1H8.3a1 1 0 011 1c0 1.35.25 2.65.73 3.85a1 1 0 01-.21 1.11l-2.2 2.2z" />
  </svg>
);

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact-section">
        <div className="contact-left">
          <h2>Get in touch how <br />can we help</h2>
          <p>
            Head Office
411, Sai Chamber, 4th Floor, Opposite Railway Station,Santacruz (East) Mumbai-400056. Tel No-022-26125301/26125191
          </p>
          <p>
            Orissa Office
At/P.O.- Nischintakoil, PS-Salipur, Dist-Cuttack Tel. No-0671-2353668, E-mail-brajgauri.trust@gmail.com

          </p>

          <div className="contact-options">
            <div className="contact-option">
              <div className="icon"><MailIcon /></div>
              <div>
                <h4>Send Us an Email</h4>
                <p className="contact-link">brajgauri.trust@gmail.com</p>
              </div>
            </div>

            <div className="contact-option">
              <div className="icon"><CallIcon /></div>
              <div>
                <h4>Give Us a Call</h4>
                <p className="contact-link">022-26125301</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <label>
            Full name
            <input type="text" placeholder="Ex. braj" />
          </label>

          <label>
            Email Address
            <input type="email" placeholder="Ex. 123@example.com" />
          </label>

          <label>
            Phone Number
            <input type="tel" placeholder="Ex.0123456789" />
          </label>

          <label>
            Leave Us a Message
            <textarea placeholder="Write Your Message here..."></textarea>
          </label>

          <button type="submit">Submit now</button>
        </form>
      </section>

      <Footer />
    </>
  );
};


export default Contact;
