// result.js
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Content from '../../components/content/Content';
import Modal from '../../components/modal/Modal'; 
import './Result.scss';

const Result = () => {
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
    <Content pageClassName="content-images-result">
      <Header />
      <h1 className='displayNone'>Page "résulats"</h1>
      <div className='leftContent-result'>
        {!isModalOpen && (
          <div className='button-play-result' onClick={handlePlayButtonClick}>
            <i className="fa-solid fa-circle-play"></i>
          </div>
        )}
      </div>

      <div className='rightContent'>
        <div className='lists'>
          <div class="list">
            <h2 className='displayNone'>Lien</h2>
            <i class="fa-solid fa-link"></i>
            <div className='listContent'>
              <a href="https://drive.google.com/drive/folders/1bZpkdY4PPMgJwhU7mLRkheT49-_rkrdU?usp=drive_link" target="_blank" rel='noreferrer'>Cliquez ici pour ouvrir le récapitulatif</a>
            </div>
          </div>
          <div class="list">
            <h2 className='displayNone'>SiteWeb</h2>
            <i class="fa-solid fa-circle-info"></i>
            <div className='listContent'>
              <p>Pour chaque optimisation mesurable et quantifiable, vous trouverez un récapitulatif réalisé sur CapFrameX. Les récapitulatifs couvrent la stabilité, la latence, les performances globales, l'avis du client, ainsi qu'une remarque personnelle. <br></br>Tous les benchmarks sont effectués avec les mêmes paramètres en jeu, sauf indication contraire.<br></br>
              Il est à noter que certaines optimisations concurrentes offrent potentiellement de meilleurs résultats mais provoquent souvent une instabilité. <br></br>En général, il est important de souligner que la manipulation de votre système d'exploitation ou du matériel peut rendre instable votre PC.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} pageClassName="close-button-result">
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
    </Content>
  );
};

export default Result;
