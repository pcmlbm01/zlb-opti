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
          <i class="fa-solid fa-house"></i>
          <i class="fa-solid fa-bug-slash"></i>
          <i class="fa-solid fa-fire-flame-curved"></i>
          <i class="fa-solid fa-chart-simple"></i>
          <i class="fa-solid fa-gamepad"></i>
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
