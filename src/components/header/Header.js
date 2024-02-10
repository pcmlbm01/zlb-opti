// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img src="/images/homeLogo.png" alt="Home Logo" />
      </div>
      <nav className="header_navbar">
        <ul>
          <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/buy" activeClassName="active">Buy</NavLink></li>
          <li><NavLink to="/result" activeClassName="active">Result</NavLink></li>
          <li><NavLink to="/other" activeClassName="active">Other</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
