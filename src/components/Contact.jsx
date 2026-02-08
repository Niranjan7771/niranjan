
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';
import { PROFILE } from '../data';
import ThreatMapGlobe from './ThreatMapGlobe';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <ThreatMapGlobe />

            <div className="contact-content-relative">
                <h2 className="section-title">
                    <span className="text-bracket">&lt;</span> COMMAND_UPLINK <span className="text-bracket">/&gt;</span>
                </h2>

                <div className="holo-grid">
                    {/* LinkedIn Card */}
                    <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="holo-card">
                        <div className="holo-content">
                            <FaLinkedin className="holo-icon" />
                            <h3 className="holo-title">LINKEDIN_UPLINK</h3>
                            <p className="holo-status">STATUS: <span className="text-neon">ONLINE</span></p>
                            <div className="scan-line"></div>
                        </div>
                        <div className="corner-brackets"></div>
                    </a>

                    {/* Email Card */}
                    <a href={`mailto:${PROFILE.socials.email}`} className="holo-card featured">
                        <div className="holo-content">
                            <FaEnvelope className="holo-icon" />
                            <h3 className="holo-title">SECURE_MAIL_RELAY</h3>
                            <p className="holo-status">ENCRYPTION: <span className="text-neon">PGP_READY</span></p>
                            <div className="scan-line"></div>
                        </div>
                        <div className="corner-brackets"></div>
                    </a>

                    {/* GitHub Card */}
                    <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="holo-card">
                        <div className="holo-content">
                            <FaGithub className="holo-icon" />
                            <h3 className="holo-title">GITHUB_REPO</h3>
                            <p className="holo-status">ACCESS: <span className="text-neon">PUBLIC</span></p>
                            <div className="scan-line"></div>
                        </div>
                        <div className="corner-brackets"></div>
                    </a>
                </div>

                <div className="hud-footer-container">
                    <div className="marquee-container">
                        <div className="marquee-content">
                            SYSTEM: ONLINE | SECURE CONNECTION ESTABLISHED | ENCRYPTION: AES-256-GCM | LOCATION: INDIA | THREAT LEVEL: LOW | UPTIME: 99.99% | WELCOME USER_GUEST
                        </div>
                    </div>

                    <div className="footer-bar glass-footer">
                        <div className="footer-left">
                            <span className="text-muted">© 2025</span> <span className="text-neon">NIRANJAN</span> <span className="text-muted">| ALL RIGHTS RESERVED</span>
                        </div>
                        <div className="social-icons">
                            <a href={PROFILE.socials.github}><FaGithub /></a>
                            <a href={PROFILE.socials.linkedin}><FaLinkedin /></a>
                            <a href={`mailto:${PROFILE.socials.email}`}><FaEnvelope /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
