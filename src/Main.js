import React from 'react';
import NavBar from './components/NavBar';
import HomeHero from './components/HomeHero';
import SecondaryHero from './components/SecondaryHero';
import ExpertTeam from './components/ExpertTeam';

function Main() {
  return (
    <div>
      <NavBar/>
      <HomeHero/>
      <SecondaryHero/>
      <ExpertTeam/>
    </div>
  );
}

export default Main;
