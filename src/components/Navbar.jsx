
import React, { useState, useEffect } from 'react';
import { FaTerminal } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#hero" className="logo" onClick={() => setMenuOpen(false)}>
                    <span className="logo-brace">{'{'}</span>
                    <span className="logo-text">RED_TEAM</span>
                    <span className="logo-brace">{'}'}</span>
                </a>

                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#about" onClick={toggleMenu} className="cyber-link">
                            <span className="link-bracket">[</span> ABOUT <span className="link-bracket">]</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" onClick={toggleMenu} className="cyber-link">
                            <span className="link-bracket">[</span> PROJECTS <span className="link-bracket">]</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#resume" onClick={toggleMenu} className="cyber-link">
                            <span className="link-bracket">[</span> RESUME <span className="link-bracket">]</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
