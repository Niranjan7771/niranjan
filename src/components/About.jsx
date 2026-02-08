
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ABOUT } from '../data';
import '../styles/About.css';

const About = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yContent = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            <div className="about-container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="text-bracket">&lt;</span> SYSTEM_ID <span className="text-bracket">/&gt;</span>
                    </h2>
                </div>

                <motion.div className="about-content" style={{ y: yContent }}>
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
                        <h3 className="skills-header">CAPABILITIES_MATRIX.EXE</h3>
                        <div className="skills-grid">
                            {ABOUT.skills.map((skill, index) => (
                                <div key={index} className="skill-hex">
                                    [ {skill} ]
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
