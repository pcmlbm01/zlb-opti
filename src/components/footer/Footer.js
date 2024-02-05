// Footer.js
import React from 'react';
import './Footer.scss'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-copyright">
        &copy; 2024 Votre Nom. Tous droits réservés.
      </div>
      <div className="footer-links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
      </div>
    </footer>
  );
};

export default Footer;
