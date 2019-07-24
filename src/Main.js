import React from 'react';
import NavBar from './components/NavBar';
import HomeHero from './components/HomeHero';
import SecondaryHero from './components/SecondaryHero';
import ExpertTeam from './components/ExpertTeam';
import CoreValues from './components/CoreValues';
import BlogLinks from './components/BlogLinks';
import ContactSection from './components/ContactSection';

class Main extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <HomeHero/>
                <SecondaryHero/>
                <ExpertTeam/>
                <CoreValues/>
                <BlogLinks/>
                <ContactSection/>
            </div>
        );
    }
}

export default Main;
