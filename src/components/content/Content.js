// Content.js
import React from 'react';
import PropTypes from 'prop-types';
import './Content.scss';

const Content = ({ children, pageClassName }) => {
  return (
    <div className={`content-container`}>
      <div className={`content-images ${pageClassName}`}>
        {children}
      </div>
      <div className="copyright">
        &copy; 2024 ZLBopti. Tous droits réservés.
      </div>
    </div>
  );
};

Content.propTypes = {
  pageClassName: PropTypes.string.isRequired,
};

export default Content;
