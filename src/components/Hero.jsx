
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaFingerprint, FaArrowRight, FaCode } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import AsciiPortrait from './AsciiPortrait';
import { PROFILE } from '../data';
import '../styles/Hero.css';

const Hero = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yRight = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section id="hero" className="hero-section" ref={sectionRef}>
            <div className="hero-grid-overlay"></div>

            <div className="hero-container">
                <motion.div className="hero-left" style={{ y: yLeft, opacity }}>
                    <motion.div
                        className="badge-container"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="terminal-badge">
                            <span className="prompt">root@niranjan:~#</span> ./init_profile.sh
                        </div>
                    </motion.div>

                    <h1 className="glitch-header">
                        <span className="typing-effect">NIRANJAN_DEV</span>
                        <span className="cursor">█</span>
                    </h1>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="text-bracket">[</span> CYBERSECURITY <span className="text-bracket">]</span> &<br /> FULL_STACK_ENGINEER
                    </motion.h2>

                    <p className="hero-desc">
                        &gt; Specialized in building secure, scalable systems.<br />
                        &gt; 3rd Year CSE Undergraduate.<br />
                        &gt; Analyzing threats & architecting defenses.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-cyber">
                            EXECUTE_PROJECTS()
                        </a>
                        <a href="#contact" className="btn btn-cyber-outline">
                            CONTACT_PROTOCOL
                        </a>
                    </div>
                </motion.div>

                <motion.div className="hero-right" style={{ y: yRight, opacity }}>
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} className="tilt-card-wrapper">
                        <div className="cyber-card">
                            <div className="card-header-bar">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                                <span className="bar-title">user_profile.exe</span>
                            </div>
                            <div className="card-content-cyber">
                                <div className="cyber-image-frame">
                                    <AsciiPortrait />
                                    <div className="scan-line"></div>
                                </div>
                                <div className="cyber-stats">
                                    <div className="stat-row">
                                        <span className="label">NAME:</span>
                                        <span className="value">{PROFILE.name}</span>
                                    </div>
                                    <div className="stat-row">
                                        <span className="label">ROLE:</span>
                                        <span className="value">SEC_ENGINEER</span>
                                    </div>
                                    <div className="stat-row">
                                        <span className="label">ID:</span>
                                        <span className="value mono highlight">CS23B1076</span>
                                    </div>
                                    <div className="stat-row">
                                        <span className="label">STATUS:</span>
                                        <span className="value blink">ONLINE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </motion.div>
            </div>

            {/* Background Decorative Parallax Text */}
            <motion.div
                className="parallax-bg-text"
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 400]) }}
            >
                01010110 01010101 01001100 01001110 01011111 01010011 01000011 01000001 01001110
            </motion.div>
        </section>
    );
};

export default Hero;
