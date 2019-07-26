import React from 'react';
// import { FaBeer } from 'react-icons/fa';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="contact-form__company-info">
            <div className="contact-form__form-wrapper">
                <h3>417.501.6552</h3>
                <h3>info@mostlyserious.io</h3>
            </div>
            <p>4064 S. Lone Pine, Springfield, MO 65804</p>
        </div>
    </section>
);

export default ContactSection;
