// Footer.js
import React from 'react';
import './Footer.scss'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <span className="icon"><i className="fa-brands fa-twitter"></i></span>
          <span className="text">Twitter</span>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <span className="icon"><i className="fa-brands fa-facebook"></i></span>
          <span className="text">Facebook</span>
        </a>

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <span className="icon"><i className="fa-brands fa-instagram"></i></span>
          <span className="text">Instagram</span>
        </a>

        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <span className="icon"><i className="fa-brands fa-youtube"></i></span>
          <span className="text">Youtube</span>
        </a>

        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <span className="icon"><i className="fa-brands fa-discord"></i></span>
          <span className="text">Discord</span>
        </a>

        <a href="https://linktree.com" target="_blank" rel="noopener noreferrer">
          <span className="icon"><i className="fa-solid fa-link"></i></span>
          <span className="text">LinkTree</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;