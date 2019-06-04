import React from 'react';
import NavBar from './components/NavBar';
import HomeHero from './components/HomeHero';
import SecondaryHero from './components/SecondaryHero';

function Main() {
  return (
    <div>
      <NavBar/>
      <HomeHero/>
      <SecondaryHero/>
    </div>
  );
}

export default Main;
