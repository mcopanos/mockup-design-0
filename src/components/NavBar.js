import React from 'react';
// import Logo from '/Users/michealcopanos/projects/my-projects/mockup-design-0/public/images/logo.svg';

function NavBar() {
    return (
        <header>
            <nav className="nav-bar">
                <ul>
                    <li className="logo">
                        <a href="#">
                            <img src="" alt=""/>
                        </a>
                    </li>
                    <li className="who-we-are">
                        <a href='#'>Who We Are</a>
                    </li>
                    <li className="contact-page">
                        <a href='#'>Get in Touch</a>
                        <i className="fas fa-envelope-open"></i>
                    </li>
                    <li className="hamburger">
                        <div className="hamburger-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;