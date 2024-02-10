// other.js
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Content from '../../components/content/Content';
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
    <Content pageClassName="content-images-other">
      <Header />
      <h1 className='displayNone'>Page "résulats"</h1>
      <div className='leftContent-other'>
        {!isModalOpen && (
          <div className='button-play-other' onClick={handlePlayButtonClick}>
            <i className="fa-solid fa-circle-play"></i>
          </div>
        )}
      </div>

      <div className='rightContent'>
        <div className='lists'>
          <div className="list">
            <h2 className='displayNone'>Lien</h2>
            <i className="fa-solid fa-link"></i>
            <div className='listContent'>
              <a href="https://drive.google.com/drive/folders/1bZpkdY4PPMgJwhU7mLRkheT49-_rkrdU?usp=drive_link" target="_blank" rel='noreferrer'>Cliquez ici pour ouvrir les sujets</a>
            </div>
          </div>
          <div className="list">
            <h2 className='displayNone'>SiteWeb</h2>
            <i className="fa-solid fa-circle-info"></i>
            <div className='listContent'>
              <p>Sur cette page, découvrez les autres sujets que j'aborde, tous les liens externes liés à Zlbopti et nos optimisations, ainsi que toutes les vidéos et tutoriels associés au site.</p>
            </div>
          </div>
        </div>
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
    </Content>
  );
};

export default Other;
