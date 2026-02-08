
import React, { useState, useEffect } from 'react';
import { FaTerminal, FaRobot } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#hero" className="logo" onClick={() => setMenuOpen(false)}>
                    <div className="logo-icon">
                        <FaTerminal />
                    </div>
                    <span>NIRANJAN<span className="logo-accent">.DEV</span></span>
                </a>

                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="nav-item"><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li className="nav-item"><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li className="nav-item"><a href="#resume" onClick={toggleMenu}>Resume</a></li>
                    <li className="nav-item hidden-desktop">
                        <a href="#ai-prompts" className="ai-btn-mobile" onClick={toggleMenu}>
                            <FaRobot /> AI Prompts
                        </a>
                    </li>
                </ul>

                <a href="#ai-prompts" className="ai-btn-desktop">
                    <FaRobot className="btn-icon" /> AI Prompts
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
