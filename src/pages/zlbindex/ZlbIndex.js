// ZlbIndex.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ZlbIndex.scss';
import indexLogo from "../../images/indexLogo.png"

const ZlbIndex = () => {
  return (
    <Link to="/home" className="container">
      <h1 className='displayNone'>ZLBopti</h1>
      <img className="logo" src={indexLogo} alt="Index Logo" />
    </Link>
  );
};

export default ZlbIndex;
