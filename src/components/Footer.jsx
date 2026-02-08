
import React from 'react';
import { PROFILE } from '../data';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>{PROFILE.name}</h2>
                <div className="social-links">
                    {Object.entries(PROFILE.socials).map(([platform, link]) => (
                        <a key={platform} href={link} target="_blank" rel="noopener noreferrer" className="social-link">
                            {platform}
                        </a>
                    ))}
                </div>
                <p className="copyright">
                    © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
