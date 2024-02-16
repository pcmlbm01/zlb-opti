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
          <li>
            <NavLink to="/zlb-opti/home" className="nav-link" activeclassname="active">
              <span className="icon"><i class="fa-solid fa-house"></i></span>
              <span className="text">Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/zlb-opti/about" className="nav-link" activeclassname="active">
              <span className="icon"><i className="fa-solid fa-circle-info"></i></span>
              <span className="text">À propos</span>
            </NavLink></li>
          <li>
            <NavLink to="/zlb-opti/buy" className="nav-link" activeclassname="active">
              <span className="icon"><i className="fa-regular fa-credit-card"></i></span>
              <span className="text">Tarif</span>
            </NavLink></li>
          <li>
            <NavLink to="/zlb-opti/result" className="nav-link" activeclassname="active">
              <span className="icon"><i className="fa-solid fa-square-poll-vertical"></i></span>
              <span className="text">Resultat</span>
            </NavLink></li>
          <li>
            <NavLink to="/zlb-opti/other" className="nav-link" activeclassname="active">
              <span className="icon"><i className="fa-solid fa-gears"></i></span>
              <span className="text">Autre</span>
            </NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
