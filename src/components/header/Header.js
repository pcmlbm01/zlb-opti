// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img src="/images/homeLogo.png" alt="Home Logo" />
      </div>
      <nav className="header_navbar">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/buy">Buy</Link></li>
          <li><Link to="/result">Result</Link></li>
          <li><Link to="/other">Other</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
