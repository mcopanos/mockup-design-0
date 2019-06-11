import React from 'react';


function NavBar() {
    return (
        <header className="wrapper">
            <nav className="nav-bar">
                <ul>
                    <li className="logo">
                        <a href="#"><img src="https://www.mostlyserious.io/static/img/logo.svg" alt=""/></a>
                    </li>
                    <li className="who-we-are">
                        <a href='#'>Who We Are</a>
                    </li>
                    <li className="contact-page">
                        <a href='#'>Get in Touch</a>
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