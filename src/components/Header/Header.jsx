import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <nav className='nav'>
                <div className="burger-menu" onClick={toggleMenu}>
                    {menuOpen ? (
                        <i className="fas fa-times"></i>
                    ) : (
                        <i className="fas fa-bars"></i>
                    )}
                </div>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li className="center" onClick={closeMenu}><a href="#home">Accueil</a></li>
                    <li className="upward" onClick={closeMenu}><a href="#resume">CV</a></li>
                    <li className="forward" onClick={closeMenu}><a href="#projects">Projets</a></li>
                </ul>
                <div className='nav-icons'>
                    <a href="https://www.linkedin.com/in/julien-l%C3%A9ger/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/AnotheerDev" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
