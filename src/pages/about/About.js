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
          <i class="fa-solid fa-user"></i>
          <i class="fa-solid fa-wand-magic-sparkles"></i>
          <i class="fa-solid fa-bomb"></i>
          <i class="fa-solid fa-calendar-days"></i>
          <i class="fa-solid fa-circle-info"></i>
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
