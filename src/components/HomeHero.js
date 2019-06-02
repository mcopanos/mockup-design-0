import React from 'react';
import HeroImage from '../photos/main-photo.jpg';

function HomeHero() {
    return (
        <section className="hero-container">
            <img className="hero-img" src={HeroImage} alt="people in a board meeting"/>
            <div className="content">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h2>
            </div>
        </section>
    );
}

export default HomeHero;