import React from 'react';
import NavBar from './components/NavBar';
import HomeHero from './components/HomeHero';
import SecondaryHero from './components/SecondaryHero';
import ExpertTeam from './components/ExpertTeam';
import CoreValues from './components/CoreValues';
import BlogLinks from './components/BlogLinks';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer'

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
                <Footer/>
            </div>
        );
    }
}

export default Main;
