import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaAppleAlt, FaDumbbell, FaInfoCircle, FaPhone, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">GymRat</h1>
      <div className="burger" onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="Diet" smooth={true} >
            <FaAppleAlt className="icon" /> Diet
          </Link>
        </li>
        <li>
          <Link to="Excercise" smooth={true} >
            <FaDumbbell className="icon" /> Exercise
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} >
            <FaInfoCircle className="icon" /> About
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} >
            <FaPhone className="icon" /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
