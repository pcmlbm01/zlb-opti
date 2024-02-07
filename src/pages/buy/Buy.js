// buy.js
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';
import Modal from '../../components/modal/Modal'; 
import './Buy.scss';

const Buy = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handlePlayButtonClick = () => {
    openModal();
  };

  return (
    <Background pageClassName="background-images-buy">
      <Header />
      <h1>buy</h1>
      <div className='leftContent-buy'>
        <div className='leftContentIcon-buy'>
          <i className="fa-solid fa-bolt"></i>
          <i className="fa-solid fa-bug-slash"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-hand"></i>
          <i className="fa-solid fa-gamepad"></i>
        </div>
        {!isModalOpen && (
          <div className='button-play-buy' onClick={handlePlayButtonClick}>
            <i className="fa-solid fa-circle-play"></i>
          </div>
        )}
      </div>
      <Footer />

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} pageClassName="close-button-buy">
        {/* Content inside the modal */}
        <iframe
          title="YouTube video player"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zwL-r78BEdg"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Modal>
    </Background>
  );
};

export default Buy;
