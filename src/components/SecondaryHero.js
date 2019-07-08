import React from 'react';

function SecondaryHero() {
    return (
        <section className="about-us">
            <div className="centered-content">
                <h2>Around Our Office</h2>
                {/*<br/>*/}
                <p>
                    Call us crazy, but we believe being a product of out environment
                    can be a good thing. At our headquarters in Springfield, MO, our
                    collaborative spaces flow one into the next. The open airy feel
                    keep our heads in the game. The natural light gives us our munch
                    needed daily dose of Vitamin D. And we're so obsessed with writing
                    on whiteboards that a few of them have gone mobile.
                </p>
            </div>
            <img className="hero-img" src="https://www.mostlyserious.io/uploads/_fullWidth/full-service-digital-agency-2.jpg" alt="people brain storming"/>
        </section>
    );
}

export default SecondaryHero;
