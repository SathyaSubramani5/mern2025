import React from'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="link">Home</li>
        <li className="link">About</li>
        <li className="link">Services</li>
        <li className="link">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
