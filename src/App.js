// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about"; 
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Import
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
