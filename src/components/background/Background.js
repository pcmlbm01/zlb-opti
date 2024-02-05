// Background.js
import React from 'react';
import './Background.scss';

const Background = ({ children }) => {
  return (
    <div className="background-container">
      <div className="background-images">
        {children}
      </div>
    </div>
  );
};

export default Background;
