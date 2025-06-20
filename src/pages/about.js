import React from "react";
import "./about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <>
    <Navbar /> 
    <HeroSection />

      {/* Trust and Growth Section */}
      <section className="section" style={{ height: "auto" }}>
        <div className="trust-grid">
          <div className="trust-left">
            <h2>Welcome to our community of trust and growth</h2>
            <p>
              BrajGauri Trust has been set up in Mumbai in the year of 2004, with a vision to serve the poor, down trodden and under privileged people of this country. This philanthropic trust is founded in the loving memory of grand parents of Mr. Dev Mohanty, who is the founder member and chairman of our trust. He is also the principal donor to this trust and sole inspiration behind all the activities of our trust.
            </p>
            <p>
              Ours is a completely family trust and formed with a noble principle of “serving to mankind is serving to God“. We have never accepted any donation and all of our trust activities are funded by our Chairman and his family.
            </p>
            <p>
              Our charitable activities are now being undertaken in Mumbai, Maharashtra and Cuttack, Orissa. We are mostly working in the areas of Education, Health Care and Capacity building of unemployed youths.
            </p>
            <div className="tag-group">
              <span className="tag">TRUST</span>
              <span className="tag">COMMUNITY</span>
              <span className="tag">GROWTH</span>
            </div>
          </div>
          <div className="trust-right">
            <div className="trust-box">
              <h4>Our mission</h4>
              <p>Empowering world with integrity and vision.</p>
            </div>
            <div className="trust-box">
              <h4>Our values</h4>
              <p>Commitment to transparency and collaboration.</p>
            </div>
            <div className="trust-box">
              <h4>Our impact</h4>
              <p>Creating positive change in the world.</p>
            </div>
            <div className="trust-box">
              <h4>Get involved</h4>
              <p>Become a volunteer and ride with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Future Section */}
      <section className="section" style={{ height: "auto", backgroundColor: "#fefaf4" }}>
        <div className="support-grid">
          <div className="support-image">
            <img src="/images/image_5.jpg" alt="Smiling child" />

          </div>
          <div className="support-text">
            <h2>Join us in<br />creating a better future</h2>
            <a href="/news" className="button discover-button">Discover more</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
