// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import QuestionSection from '../components/QuestionSection';
import CommunitySection from '../components/CommunitySection';
import Footer from "../components/footer";
import './home.css'; 

function Home() {
  return (
    <div>
      <Navbar />
<section className="hero_section">
  <div className="overlay">
    <div className="container">
      <div className="flex-vertical">
        <h1 className="h1-heading">
          “Sometimes people do not suffer from violence of bad, but from silence of good.”
        </h1>
        <p className="subheading">
          Join us on a journey where business meets purpose. Our mission is to inspire and empower through trust and collaboration, creating a brighter future together.
        </p>
        <div className="button-group">
         <Link to="/about" className="button"><span>Discover more</span></Link>
          <Link to="/volunteer" className="button secondary">Join us</Link>
        </div>
      </div>
    </div>
  </div>
</section>
      <CommunitySection />
      <TestimonialsSection />
      <QuestionSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
