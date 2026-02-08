
import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT } from '../data';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="text-bracket">&lt;</span> SYSTEM_ID <span className="text-bracket">/&gt;</span>
                    </h2>
                </div>

                <div className="about-content">
                    {/* Left Column: Terminal Text */}
                    <div className="about-text-panel cyber-panel">
                        <div className="panel-header">USER_BIO.LOG</div>
                        <p className="typing-text">
                            <span className="prompt">&gt;</span> {ABOUT.summary}
                        </p>
                        <div className="status-indicators">
                            <div className="indicator">
                                <span className="light green"></span> CORE_SYSTEMS: ONLINE
                            </div>
                            <div className="indicator">
                                <span className="light red blink"></span> THREAT_DETECTION: ACTIVE
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Skills Grid */}
                    <div className="skills-panel">
                        <h3 className="skills-header">CAPABILITIES_MATRIX</h3>
                        <div className="skills-grid">
                            {ABOUT.skills.map((skill, index) => (
                                <motion.div
                                    className="skill-hex"
                                    key={index}
                                    whileHover={{ scale: 1.1, borderColor: 'var(--neon-green)' }}
                                >
                                    <span className="skill-text">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
