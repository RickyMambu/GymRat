import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">GymRat</h1>
      <ul className="navbar-links">
        <li><a href="#diet">Diet</a></li>
        <li><a href="#exercise">Exercise</a></li>
        <li><a href="#progress">Progress</a></li>
        <li><a href="#information">Information</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;