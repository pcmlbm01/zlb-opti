import React from 'react';
import './Modal.scss'; 

const Modal = ({ isOpen, onClose, children, pageClassName }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`modal-overlay`}>
      <span className={pageClassName} onClick={onClose}>
        <i className="fa-solid fa-circle-xmark"></i>
      </span>
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;