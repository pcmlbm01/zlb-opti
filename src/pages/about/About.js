// about.js
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Content from '../../components/content/Content';
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
    <Content pageClassName="content-images-about">
      <Header />
      <h1 className='displayNone'>Page "à propos"</h1>
      <div className='leftContent-about'>
        {!isModalOpen && (
          <div className='button-play-about' onClick={handlePlayButtonClick}>
            <i className="fa-solid fa-circle-play"></i>
          </div>
        )}
      </div>

      <div className='rightContent'>
        <div className='lists'>
          <div className="list">
            <h2 className='displayNone'>Personnel</h2>
            <i className="fa-solid fa-user"></i>
            <div className='listContent'>
              <p>Je m'engage dans l'optimisation depuis une <span>décennie</span> et j'ai <span>optimisé plus de 500 pc</span>, passionné par l'<span>art de maximiser les performances</span>. En tant que développeur web, j'ai créé ce site pour partager mes compétences et professionnaliser mes connaissances d'optimisations.</p>
            </div>
          </div>
          <div className="list">
            <h2 className='displayNone'>SiteWeb</h2>
            <i className="fa-solid fa-display"></i>
            <div className='listContent'>
              <p>Chaque page est accompagnée d'un bouton <i className="fa-solid fa-circle-play"></i> <span>Play</span> vous menant à une <span>vidéo explicative</span>. Découvrez mes prestations, leurs tarifs, ainsi que les résultats concrets de mes optimisations. Explorez également divers sujets informatiques.</p>
            </div>
          </div>
          <div className="list">
            <h2 className='displayNone'>Optimisation</h2>
            <i className="fa-solid fa-gears"></i>
            <div className='listContent'>
              <p>Optimisez Windows avec une <span>quinzaine de sujets</span> et des <span>ajustements spécifiques pour les jeux</span>. Nous couvrons ce qui concerne <span>l'esport et la compétition</span>. Bénéficiez d'une <span>analyse approfondie des performances</span>, demandez un <span>devis personnalisé</span>, et <span>libérez le plein potentiel</span> de votre PC.</p>
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

export default About;