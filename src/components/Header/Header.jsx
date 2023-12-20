import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header>
            <nav className='nav'>
                <ul className="nav-links">
                    <li className="center"><a href="#home">Accueil</a></li>
                    <li className="upward"><a href="#projects">Projets</a></li>
                    <li className="forward"><a href="#resume">CV</a></li>
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
