// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img src="/images/homeLogo.png" alt="Home Logo"/>
      </div>
      <nav className="header_navbar">
        <ul>
          <li><NavLink to="/home" activeclassname="active">Accueil</NavLink></li>
          <li><NavLink to="/about" activeclassname="active">À propos</NavLink></li>
          <li><NavLink to="/buy" activeclassname="active">Tarif</NavLink></li>
          <li><NavLink to="/result" activeclassname="active">Resultat</NavLink></li>
          <li><NavLink to="/other" activeclassname="active">Autre</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;