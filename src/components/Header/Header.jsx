import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/" exact activeClassName="active">Accueil</NavLink></li>
                    <li><NavLink to="/projects" activeClassName="active">Projets</NavLink></li>
                    <li><NavLink to="/resume" activeClassName="active">CV</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
