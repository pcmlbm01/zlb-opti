// Result.js
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';
import './Result.scss';

const Result = () => {
  return (
    <Background pageClassName="background-images-result">
      <Header />
      <h1>result</h1>
      <div className='leftContent-result'>
        <div className='leftContentIcon-result'>
        <i class="fa-solid fa-broom"></i>
          <i class="fa-solid fa-bug-slash"></i>
          <i class="fa-solid fa-bullseye"></i>
          <i class="fa-solid fa-folder"></i>
          <i class="fa-regular fa-face-smile"></i>
        </div>
        <div className='button-play-result'>
          <i class="fa-solid fa-circle-play"></i>
        </div>
      </div>
      <Footer />
    </Background>
  );
};

export default Result;
