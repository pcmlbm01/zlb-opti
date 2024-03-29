// home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/zlb-opti/buy" className='cta-button'>
            Acheter
          </Link>
          <Link to="/zlb-opti/about" className='detail-button'>
            En savoir plus
          </Link>
        </div>
        <div className='lists'>
          <ul>
            <li className='list'>
              <i className="fa-solid fa-arrow-up-wide-short"></i>
              <div className='listContent-large'>
                <h2>Performance</h2>
                <p>Libère le plein potentiel</p>
              </div>
            </li>
            <li className='list'>
              <i className="fa-solid fa-scale-balanced"></i>
              <div className='listContent'>
                <h2>Stabilité</h2>
                <p>Expérience constante</p>
              </div>
            </li>
            <li className='list'>
              <i className="fa-solid fa-clock"></i>
              <div className='listContent'>
                <h2>Latence</h2>
                <p>Réponse améliorée</p>
              </div>
            </li>
            <li className='list'>
              <i className="fa-solid fa-eye"></i>
              <div className='listContent'>
                <h2>Lisibilité</h2>
                <p>Graphismes clairs</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/zlb-opti/buy" className='result-button'>
            Résultats et avis
          </Link>
          <Link to="/zlb-opti/about" className='other-button'>
            Mes sujets et autres
          </Link>
        </div>
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
    </Content>
  );
};

export default Home;