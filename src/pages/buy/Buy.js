// buy.js
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Content from '../../components/content/Content';
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
    <Content pageClassName="content-images-buy">
      <Header />
      <h1 className='displayNone'>Page "tarif"</h1>
      <div className='leftContent-buy'>
        {!isModalOpen && (
          <div className='button-play-buy' onClick={handlePlayButtonClick}>
            <i className="fa-solid fa-circle-play"></i>
          </div>
        )}
      </div>



      <div className='rightContent'>
        <div className='lists'>

          <div class="list">
            <h2 className='displayNone'>Windows</h2>
            <i class="fa-brands fa-windows"></i>
            <div className='listContentPlus'>
              <p className='service'>Installer un nouveau windows personnalisé* <span>40e</span></p>
            </div>
            <div className='listContent'>
              <p className='service'>Optimisation de windows existant pour le jeu <span>30e</span></p>
            </div>
          </div>

          <div class="list">
            <h2 className='displayNone'>Jeu</h2>
            <i class="fa-solid fa-gamepad"></i>
            <div className='listContentPlus'>
              <p className='service'>Optimisation d'un jeu en particulier* <span>20e</span></p>
            </div>
          </div>

          <div class="list">
            <h2 className='displayNone'>Autre</h2>
            <i class="fa-solid fa-microchip"></i>
            <div className='listContentPlus'>
              <p className='service'>Conseil hardware* <span>20e</span></p>
            </div>
            <div className='listContent'>
              <p className='service'>Overclocking <span>20e</span></p>
            </div>
          </div>

          <div class="list">
            <h2 className='displayNone'>Aide</h2>
            <i class="fa-solid fa-handshake"></i>
            <div className='listContent'>
              <p className='service'>Nettoyer windows <span>20e</span></p>
            </div>
            <div className='listContent'>
              <p className='service'>Config PC <span><i class="fa-solid fa-arrow-pointer"></i></span></p>
            </div>
            <div className='listContent'>
              <p className='service'>Montage PC <span>20e</span></p>
            </div>
            <div className='listContent'>
              <p className='service'>Conseils/discution <span>20e</span></p>
            </div>
          </div>



          <div class="list">
            <h2 className='displayNone'>Devis</h2>
            <i class="fa-solid fa-clipboard-list"></i>
            <div className='listContent'>
              <p>assurance/sécurité, comparatif avant apres, bundle possible</p>
            </div>
          </div>

          <div className='footerLists'>
            <p>*recommandé</p>
          </div>
          

        </div>
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
    </Content>
  );
};

export default Buy;
