import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#home" className="active">Accueil</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#resume">CV</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
