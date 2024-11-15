import React from "react";
import { Link } from "react-scroll";
import { FaAppleAlt, FaDumbbell, FaInfoCircle, FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">GymRat</h1>
      <ul className="navbar-links">
        <li>
          <Link to="Diet" smooth={true} duration={500}>
            <FaAppleAlt className="icon" /> Diet
          </Link>
        </li>
        <li>
          <Link to="Exercise" smooth={true} duration={500}>
            <FaDumbbell className="icon" /> Exercise
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} duration={500}>
            <FaInfoCircle className="icon" /> About
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} duration={500}>
            <FaPhone className="icon" /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
