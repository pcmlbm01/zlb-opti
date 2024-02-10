// Error.js
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Content from '../../components/content/Content';
import './Error.scss';

const ErrorPage = () => {
  return (
    <Content>
      <Header />
      <h1>Error</h1>
      <Footer />
    </Content>
  );
};

export default ErrorPage;
