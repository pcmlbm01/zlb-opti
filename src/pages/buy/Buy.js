// Buy.js
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';
import './Buy.scss';

const Buy = () => {
  return (
    <Background>
      <Header />
      <h1>Buy</h1>
      {/* Ajoutez le contenu spécifique à la page ici */}
      <Footer />
    </Background>
  );
};

export default Buy;
