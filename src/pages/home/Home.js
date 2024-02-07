// home.js
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';
import Modal from '../../components/modal/Modal'; 
import './Home.scss';

const Home = () => {
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
    <Background pageClassName="background-images-home">
      <Header />
      <h1>home</h1>
      <div className='leftContent-home'>
        <div className='leftContentIcon-home'>
          <i className="fa-solid fa-bolt"></i>
          <i className="fa-solid fa-bug-slash"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-hand"></i>
          <i className="fa-solid fa-gamepad"></i>
        </div>
        {!isModalOpen && (
          <div className='button-play-home' onClick={handlePlayButtonClick}>
            <i className="fa-solid fa-circle-play"></i>
          </div>
        )}
      </div>
      <Footer />

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} pageClassName="close-button-home">
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

export default Home;
