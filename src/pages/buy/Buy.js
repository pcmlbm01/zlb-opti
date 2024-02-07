// Buy.js
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';
import './Buy.scss';

const Buy = () => {
  return (
    <Background pageClassName="background-images-buy">
      <Header />
      <h1>buy</h1>
      <div className='leftContent-buy'>
        <div className='leftContentIcon-buy'>
          <i class="fa-solid fa-house"></i>
          <i class="fa-solid fa-bug-slash"></i>
          <i class="fa-solid fa-fire-flame-curved"></i>
          <i class="fa-solid fa-chart-simple"></i>
          <i class="fa-solid fa-gamepad"></i>
        </div>
        <div className='button-play-buy'>
          <i class="fa-solid fa-circle-play"></i>
        </div>
      </div>
      <Footer />
    </Background>
  );
};

export default Buy;
