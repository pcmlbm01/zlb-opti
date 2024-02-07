// Home.js
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';
import './Home.scss';

const Home = () => {
  return (
    <Background pageClassName="background-images-home">
      <Header />
      <h1>Home</h1>
      <div className='leftContent-home'>
        <div className='leftContentIcon-home'>
          <i class="fa-solid fa-house"></i>
          <i class="fa-solid fa-bug-slash"></i>
          <i class="fa-solid fa-fire-flame-curved"></i>
          <i class="fa-solid fa-chart-simple"></i>
          <i class="fa-solid fa-gamepad"></i>
        </div>
        <div className='button-play-home'>
          <i class="fa-solid fa-circle-play"></i>
        </div>
      </div>
      <Footer />
    </Background>
  );
};

export default Home;