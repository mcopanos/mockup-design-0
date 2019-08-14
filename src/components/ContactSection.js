import React from 'react';

const ContactSection = () => (
    <section className="contact-form">
        <div className="centered-content">
            <h2>Let's get to work.</h2>
        </div>
        <div className="contact-form__container">
            <form name="contact" className="contact-form__wrapper" method="post">
                <input type="hidden" name="form-name" value="contact"/>
                <div className="contact-form__inputs">
                    <label htmlFor="persons-name">What's your name?</label>
                    <input type="text" placeholder="Your name" required/>
                </div>
                <div className="contact-form__inputs">
                    <label htmlFor="company-name">Where do you work?</label>
                    <input type="text" placeholder="Your Company"/>
                </div>
                <div className="contact-form__inputs">
                    <label htmlFor="email">How can we reach you?</label>
                    <input type="text" placeholder="Your Email" required/>
                </div>
                <div className="contact-form__inputs-other">
                    <label htmlFor="additional-info">Could you tell us a bit more about your needs?</label>
                    <textarea name="text" cols="10" rows="5" />
                </div>
                <div className="contact-form__button-wrapper">
                    <button type="submit" className="contact-form__button">
                        <span>Send</span>
                    </button>
                </div>
            </form>
        </div>
        <div className="contact-form__company-info">
            <div className="contact-form__form-wrapper">
                <h3>
                    <a href="tel:4175016552">
                        <i className="fas fa-phone"></i>
                        <span>417.501.6552</span>
                    </a>
                </h3>
                <h3>
                    <a href="mailto:info@mostlyserious.io">
                        <i className="fas fa-envelope-open"></i>
                        <span>info@mostlyserious.io</span>
                    </a>
                </h3>
            </div>
            <p>4064 S. Lone Pine, Springfield, MO 65804</p>
        </div>
    </section>
);

export default ContactSection;
