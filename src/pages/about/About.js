// about.js
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';
import Modal from '../../components/modal/Modal'; 
import './About.scss';

const About = () => {
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
    <Background pageClassName="background-images-about">
      <Header />
      <h1 className='displayNone'>Page "à propos"</h1>
      <div className='leftContent-about'>
        <div className='leftContentIcon-about'>
          <i className="fa-solid fa-bolt"></i>
          <i className="fa-solid fa-bug-slash"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-hand"></i>
          <i className="fa-solid fa-gamepad"></i>
        </div>
        {!isModalOpen && (
          <div className='button-play-about' onClick={handlePlayButtonClick}>
            <i className="fa-solid fa-circle-play"></i>
          </div>
        )}
      </div>

      <div className='rightContent'>
        <div className='lists'>
          <div class="list">
            <h2 className='displayNone'>Personnel</h2>
            <i class="fa-solid fa-user"></i>
            <div className='listContent'>
              <p>Je m'engage dans l'optimisation depuis une décennie, passionné par l'art de maximiser les performances. En tant que développeur web, j'ai créé ce site pour partager mes compétences et professionnaliser mes connaissances informatiques.</p>
            </div>
          </div>
          <div class="list">
            <h2 className='displayNone'>SiteWeb</h2>
            <i class="fa-solid fa-display"></i>
            <div className='listContent'>
              <p>Chaque page est accompagnée d'un bouton <bold>Play</bold> vous menant à une vidéo explicative. Découvrez mes prestations, leurs tarifs, ainsi que les résultats concrets de mes optimisations. Explorez également divers sujets informatiques.</p>
            </div>
          </div>
          <div class="list">
            <h2 className='displayNone'>Optimisation</h2>
            <i class="fa-solid fa-gears"></i>
            <div className='listContent'>
              <p>Obtenez une stabilité accrue, des performances optimisées, une latence minimale, et une lisibilité améliorée. Bénéficiez d'une analyse approfondie des performances, demandez un devis personnalisé, et assurez-vous des gains de performance en toute sécurité.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} pageClassName="close-button-about">
        {/* Content inside the modal */}
        <iframe
          title="YouTube video player"
          width="860"
          height="360"
          src="https://www.youtube.com/embed/zwL-r78BEdg"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Modal>
    </Background>
  );
};

export default About;
