// Other.js
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';
import './Other.scss';

const Other = () => {
  return (
    <Background>
      <Header />
      <h1>Other</h1>
      {/* Ajoutez le contenu spécifique à la page ici */}
      <Footer />
    </Background>
  );
};

export default Other;
