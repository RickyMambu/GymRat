import React from 'react';
import { FaAppleAlt, FaDumbbell, FaChartLine, FaInfoCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">GymRat</h1>
      <ul className="navbar-links">
        <li><a href="#diet"><FaAppleAlt className="icon" /> Diet</a></li>
        <li><a href="#exercise"><FaDumbbell className="icon" /> Exercise</a></li>
        <li><a href="#progress"><FaChartLine className="icon" /> Progress</a></li>
        <li><a href="#information"><FaInfoCircle className="icon" /> Information</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
