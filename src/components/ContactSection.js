import React from 'react';

const ContactSection = () => (
    <section className="contact-form">
        <div className="centered-content">
            <h2>Let's get to work.</h2>
        </div>
        <div className="contact-form__container">
            <form className="contact-form__wrapper" action="post">
                <label htmlFor="persons-name">
                    <span>What's your name?</span>
                    <input type="text" placeholder="Your name"/>
                </label>
                <label htmlFor="company-name">
                    <span>Where do you work?</span>
                    <input type="text" placeholder="Your Company"/>
                </label>
                <label htmlFor="email">
                    <span>How can we reach you?</span>
                    <input type="text" placeholder="Your Email"/>
                </label>
                <label htmlFor="additional-info">
                    <span>Could you tell us a bit more about your needs?</span>
                    <textarea name="text" cols="10" rows="5" />
                </label>
            </form>
            <button className="contact-form__button">
                <span>Send</span>
            </button>
        </div>
    </section>
);

export default ContactSection;
