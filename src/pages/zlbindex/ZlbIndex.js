// ZlbIndex.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ZlbIndex.scss';

const ZlbIndex = () => {
  return (
    <Link to="/home" className="container">
      <h1 className='displayNone'>ZLBopti</h1>
      <img className="logo" src="/images/indexLogo.png" alt="Index Logo" />
    </Link>
  );
};

export default ZlbIndex;
