// Error.js
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';
import './Error.scss';

const ErrorPage = () => {
  return (
    <Background>
      <Header />
      <h1>Error Page</h1>
      {/* Ajoutez le contenu spécifique à la page ici */}
      <Footer />
    </Background>
  );
};

export default ErrorPage;
