// Other.js
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';
import Modal from '../../components/modal/Modal'; 
import './Other.scss';

const Other = () => {
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
    <Background pageClassName="background-images-other">
      <Header />
      <h1>other</h1>
      <div className='leftContent-other'>
        {!isModalOpen && (
          <div className='button-play-other' onClick={handlePlayButtonClick}>
            <i className="fa-solid fa-circle-play"></i>
          </div>
        )}
      </div>
      <Footer />

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} pageClassName="close-button-other">
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

export default Other;
