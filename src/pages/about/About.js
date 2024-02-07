// About.js
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Background from '../../components/background/Background';
import './About.scss';

const About = () => {
  return (
    <Background pageClassName="background-images-about">
      <Header />
      <h1>about</h1>
      <div className='leftContent-about'>
        <div className='leftContentIcon-about'>
          <i class="fa-solid fa-house"></i>
          <i class="fa-solid fa-bug-slash"></i>
          <i class="fa-solid fa-fire-flame-curved"></i>
          <i class="fa-solid fa-chart-simple"></i>
          <i class="fa-solid fa-gamepad"></i>
        </div>
        <div className='button-play-about'>
          <i class="fa-solid fa-circle-play"></i>
        </div>
      </div>
      <Footer />
    </Background>
  );
};

export default About;
