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
          <li><NavLink to="/home" activeClassName="active">Accueil</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">À propos</NavLink></li>
          <li><NavLink to="/buy" activeClassName="active">Tarif</NavLink></li>
          <li><NavLink to="/result" activeClassName="active">Resultat</NavLink></li>
          <li><NavLink to="/other" activeClassName="active">Autre</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
