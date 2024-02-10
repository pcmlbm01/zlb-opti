// home.js
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Content from '../../components/content/Content';
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
    <Content pageClassName="content-images-home">
      <Header />
      <h1 className='displayNone'>Page d'acceuil</h1>
      <div className='leftContent-home'>
        {!isModalOpen && (
          <div className='button-play' onClick={handlePlayButtonClick}>
            <i className="fa-solid fa-circle-play"></i>
          </div>
        )}
      </div>

      <div className='rightContent'>
        <div>
          <h1>Optimisation <em>Esport Ready</em></h1>
        </div>
        <div className='cta-container'>
          <button className='cta-button' onClick={() => window.location.href='/buy'}>
            Acheter
          </button>
          <button className='detail-button' onClick={() => window.location.href='/about'}>
            En savoir plus
          </button>
        </div>
        <div className='lists'>
          <ul>
            <li className='list'>
              <i className="fa-solid fa-arrow-up-wide-short"></i>
              <div className='listContent-large'>
                <li>Performance</li>
                <p>Gagner en image par seconde</p>
              </div>
            </li>
            <li className='list'>
              <i className="fa-solid fa-scale-balanced"></i>
              <div className='listContent'>
                <li>Stabilité</li>
                <p>Expérience constante</p>
              </div>
            </li>
            <li className='list'>
              <i class="fa-solid fa-clock"></i>
              <div className='listContent'>
                <li>Latence</li>
                <p>Réponse améliorée</p>
              </div>
            </li>
            <li className='list'>
              <i className="fa-solid fa-eye"></i>
              <div className='listContent'>
                <li>Lisibilité</li>
                <p>Graphismes clairs</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <button className='result-button' onClick={() => window.location.href='/result'}>
            Résultats et avis
          </button>
          <button className='other-button' onClick={() => window.location.href='/other'}>
            Mes sujets et autres
          </button>
        </div>
      </div>
      <Footer />

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} pageClassName="close-button-home">
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

export default Home;
