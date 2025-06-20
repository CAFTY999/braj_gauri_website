import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-logo">
            <img
              src="/images/image_8.png"
              alt="Braj Gauri Trust Logo"
              className="nav-logo-icon"
            />
            <p className="paragraph-lg">BRAJ GAURI TRUST</p>
          </div>
        </div>

        <div className="nav-right">
          <ul className="nav-menu">
            <li className="nav-menu-list"><Link to="/">Home</Link></li>
            <li className="nav-menu-list"><Link to="/about">About Us</Link></li>
            <li className="nav-menu-list"><Link to="/contact">Contact Us</Link></li>
            <li className="nav-menu-list"><Link to="/gallery">Gallery</Link></li>
            <li className="nav-menu-list"><Link to="/news">News</Link></li>
            <li className="nav-menu-list-un">
              <Link to="/volunteer">
                <button className="button_join">
                  Join Us <FaHeart className="heart-icon" />
                </button>
              </Link>
            </li>
          </ul>

          {/* Mobile menu */}
          <div className="mobile-menu">
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu">
              <span></span>
              <span></span>
              <span></span>
            </label>

            <ul className="dropdown">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/news">News</Link></li>
              <li>
                <Link to="/volunteer">
                  <button className="button_join">
                    Join Us <FaHeart className="heart-icon" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
