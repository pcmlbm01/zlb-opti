// Other.js
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';
import './Other.scss';

const Other = () => {
  return (
    <Background pageClassName="background-images-other">
      <Header />
      <h1>other</h1>
      <div className='leftContent-other'>
        <div className='leftContentIcon-other'>
          <i class="fa-solid fa-house"></i>
          <i class="fa-solid fa-bug-slash"></i>
          <i class="fa-solid fa-fire-flame-curved"></i>
          <i class="fa-solid fa-chart-simple"></i>
          <i class="fa-solid fa-gamepad"></i>
        </div>
        <div className='button-play-other'>
          <i class="fa-solid fa-circle-play"></i>
        </div>
      </div>
      <Footer />
    </Background>
  );
};

export default Other;
