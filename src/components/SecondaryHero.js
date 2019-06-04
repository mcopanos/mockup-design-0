import React from 'react';
import BoardMeeting from '../photos/board-meeting.jpg';

function SecondaryHero() {
    return (
        <section className="about-us">
            <div className="about-content">
                <h2>Around Our Office</h2>
                <br/>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Vel facilisis volutpat est velit.
                    Lectus sit amet est placerat in.
                    Senectus et netus et malesuada fames
                    ac turpis egestas integer. Nec feugiat
                    nisl pretium fusce.
                </p>
            </div>
            <img className="hero-img" src={BoardMeeting} alt="people brain storming"/>
        </section>
    );
}

export default SecondaryHero;