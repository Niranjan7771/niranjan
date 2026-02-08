
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
                    <span className="text-bracket">&lt;</span> INITIALIZE_COMMS <span className="text-bracket">/&gt;</span>
                </h2>

                <div className="contact-terminal glass">
                    <div className="terminal-header">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                        <span className="terminal-title">secure_comm_link.sh</span>
                    </div>

                    <div className="terminal-body">
                        <div className="cmd-line">
                            <span className="prompt">root@niranjan:~#</span> ./send_message --target=linkedin --user
                        </div>
                        <div className="output">
                            Establishing encrypted handshake... <span className="success">[OK]</span><br />
                            Click below to open channel:
                        </div>
                        <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="terminal-link">
                            &gt; CONNECT_LINKEDIN
                        </a>

                        <div className="cmd-line mt-4">
                            <span className="prompt">root@niranjan:~#</span> ./send_message --target=email --user
                        </div>
                        <div className="output">
                            Preparing SMTP relay... <span className="success">[OK]</span><br />
                            Click to compose payload:
                        </div>
                        <a href={`mailto:${PROFILE.socials.email}`} className="terminal-link">
                            &gt; {PROFILE.socials.email}
                        </a>

                        <div className="cmd-line mt-4">
                            <span className="prompt">root@niranjan:~#</span> exit
                        </div>
                        <div className="output blink">
                            Session terminating...
                        </div>
                    </div>
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
