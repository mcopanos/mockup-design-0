import React from 'react';

const ContactSection = () => (
    <section className="contact-form">
        <div className="centered-content">
            <h2>Let's get to work.</h2>
        </div>
        <div className="contact-form__container">
            <form className="contact-form__wrapper" action="post">
                <div className="contact-form__inputs">
                    <label htmlFor="persons-name">What's your name?</label>
                    <input type="text" placeholder="Your name"/>
                </div>
                <div className="contact-form__inputs">
                    <label htmlFor="company-name">Where do you work?</label>
                    <input type="text" placeholder="Your Company"/>
                </div>
                <div className="contact-form__inputs">
                    <label htmlFor="email">How can we reach you?</label>
                    <input type="text" placeholder="Your Email"/>
                </div>

                <label htmlFor="additional-info">Could you tell us a bit more about your needs?</label>
                <textarea name="text" cols="10" rows="5" />
            </form>
            <button className="contact-form__button">
                <span>Send</span>
            </button>
        </div>
        <div className="contact-form__company-info">
            <div className="contact-form__form-wrapper">
                <h3><i className="fas fa-phone"></i><span>417.501.6552</span></h3>
                <h3><i className="fas fa-envelope-open"></i><span>info@mostlyserious.io</span></h3>
            </div>
            <p>4064 S. Lone Pine, Springfield, MO 65804</p>
        </div>
    </section>
);

export default ContactSection;