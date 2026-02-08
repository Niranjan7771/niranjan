
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFingerprint, FaArrowRight, FaCode } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import AsciiPortrait from './AsciiPortrait';
import { PROFILE } from '../data';
import '../styles/Hero.css';

const NetworkBackground = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        const particleCount = 200; // Denser particles but smaller

        const resize = () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; };

        // Matrix Rain / Data Stream vibe
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = 0; // Vertical only
                this.vy = Math.random() * 2 + 1; // Falling speed
                this.size = Math.random() * 1.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.y += this.vy;
                if (this.y > height) {
                    this.y = 0;
                    this.x = Math.random() * width;
                }
            }
            draw() {
                ctx.fillStyle = `rgba(255, 0, 51, ${this.opacity})`;
                ctx.fillRect(this.x, this.y, 1, this.size * 5); // Rectangular bits
            }
        }

        const init = () => { resize(); particles = []; for (let i = 0; i < particleCount; i++) particles.push(new Particle()); };
        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Trail effect
            ctx.fillRect(0, 0, width, height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        };
        window.addEventListener('resize', resize);
        init(); animate();
        return () => window.removeEventListener('resize', resize);
    }, []);
    return <canvas ref={canvasRef} className="network-canvas" />;
};

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            {/* <NetworkBackground /> */}
            <div className="hero-grid-overlay"></div> {/* Grid lines */}

            <div className="hero-container">
                <div className="hero-left">
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
                </div>

                <div className="hero-right">
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
                </div>
            </div>
        </section>
    );
};

export default Hero;
