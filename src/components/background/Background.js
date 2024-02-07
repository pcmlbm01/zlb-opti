// Background.js
import React from 'react';
import PropTypes from 'prop-types';
import './Background.scss';

const Background = ({ children, pageClassName }) => {
  return (
    <div className={`background-container`}>
      <div className={`background-images ${pageClassName}`}>
        {children}
      </div>
      <div className="copyright">
        &copy; 2024 ZLBopti. Tous droits réservés.
      </div>
    </div>
  );
};

Background.propTypes = {
  pageClassName: PropTypes.string.isRequired,
};

export default Background;
