import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1>Muhammad Ahmed</h1>
                <p>Web Developer | Designer | Programmer</p>
                <nav>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;