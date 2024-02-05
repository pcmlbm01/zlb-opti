// ZlbIndex.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ZlbIndex.scss'; // Importer le fichier de style

const ZlbIndex = () => {
  return (
    <Link to="/home" className="container">
      <img className="logo" src="/images/indexLogo.png" alt="Index Logo" />
    </Link>
  );
};

export default ZlbIndex;
