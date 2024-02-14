// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'; 
import homeLogo from "../../images/homeLogo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img src={homeLogo} alt="Home Logo"/>
      </div>
      <nav className="header_navbar">
        <ul>
          <li><NavLink to="/zlb-opti/home" activeclassname="active">Accueil</NavLink></li>
          <li><NavLink to="/zlb-opti/about" activeclassname="active">À propos</NavLink></li>
          <li><NavLink to="/zlb-opti/buy" activeclassname="active">Tarif</NavLink></li>
          <li><NavLink to="/zlb-opti/result" activeclassname="active">Resultat</NavLink></li>
          <li><NavLink to="/zlb-opti/other" activeclassname="active">Autre</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;