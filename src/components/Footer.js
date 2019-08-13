import React from 'react';

const Footer = () => (
    <footer>
        <div className="footer-wrapper">
            <div>
                <h6>
                    Proudly producing from the Midwest.
                    <a href="https://www.mostlyserious.io/privacy-policy">Privacty Policy</a>
                    |
                    <a href="https://www.mostlyserious.io/terms-of-use">Terms of Use</a>
                    <span>@ 2019 Mostly Serious LLC</span>
                </h6>
            </div>
            <div className="ga-certified">
                <img src="/images/ga-certified.png" alt="google analytics certification"/>
            </div>
            <div className="social-links">
                <ul className="social-links__wrapper">
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-facebook-f"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-linkedin-in"></i></li>
                </ul>



            </div>
        </div>
    </footer>
);

export default Footer;
