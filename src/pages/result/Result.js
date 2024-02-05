// Result.js
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';
import './Result.scss';

const Result = () => {
  return (
    <Background>
      <Header />
      <h1>Result</h1>
      {/* Ajoutez le contenu spécifique à la page ici */}
      <Footer />
    </Background>
  );
};

export default Result;
