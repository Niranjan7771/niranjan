
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFingerprint, FaReact, FaNodeJs, FaCube, FaArrowRight, FaRobot, FaDownload } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { PROFILE } from '../data';
import '../styles/Hero.css';

const NetworkBackground = () => {
    // Keep existing Network Background
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        const particleCount = 60;
        const connectionDistance = 150;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 0, 51, 0.4)'; // Updated to Neon Red
                ctx.fill();
            }
        }

        const init = () => {
            resize();
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 0, 51, ${1 - distance / connectionDistance})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        };
        window.addEventListener('resize', resize);
        init();
        animate();
        return () => window.removeEventListener('resize', resize);
    }, []);

    return <canvas ref={canvasRef} className="network-canvas" />;
};

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <NetworkBackground />

            {/* Background Glow */}
            <div className="hero-glow"></div>

            <div className="hero-container">
                {/* Left Content */}
                <div className="hero-left">
                    <motion.div
                        className="badge-container"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="code-badge">
                            &lt;Hello World /&gt;
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        I'm <span className="glitch-text" data-text={PROFILE.name}>{PROFILE.name}</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Future <span className="text-gradient">CSE Engineer</span> &<br /> Full Stack Developer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {PROFILE.tagline}
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View Projects <FaArrowRight />
                        </a>
                        <a href="#prompt-builder" className="btn btn-secondary glass">
                            <FaRobot /> Build Your Prompt
                        </a>
                    </motion.div>
                </div>

                {/* Right Content - 3D Card */}
                <div className="hero-right">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <Tilt
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={400} // Snappier
                            className="tilt-card-wrapper"
                            glareEnable={true}
                            glareMaxOpacity={0.1}
                            glareColor="#ffffff"
                            glarePosition="all"
                            glareBorderRadius="1rem"
                        >
                            <div className="hero-card">
                                <div className="card-top">
                                    <div className="card-image-container">
                                        <img
                                            src="https://via.placeholder.com/300x300?text=Profile"
                                            alt="Niranjan"
                                            className="card-profile-image"
                                        />
                                        <div className="card-overlay-gradient"></div>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <div>
                                        <h3 className="card-name">{PROFILE.name}</h3>
                                        <p className="card-role">
                                            <span className="text-neon">CSE Student</span> • Year 3
                                        </p>
                                        <div className="card-tags">
                                            <span className="tag">React</span>
                                            <span className="tag">Node.js</span>
                                            <span className="tag">3D Web</span>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <span className="id-code mono">ID: 2024-CSE-001</span>
                                        <FaFingerprint className="fingerprint-icon animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <FaArrowRight style={{ transform: 'rotate(90deg)' }} />
            </motion.div>
        </section>
    );
};

export default Hero;
