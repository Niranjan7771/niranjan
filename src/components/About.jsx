
import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT } from '../data';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                {/* Left: Rotated Image */}
                <div className="about-left">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-brand-neon rounded-xl rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
                        <div className="absolute -inset-4 bg-white rounded-xl -rotate-6 group-hover:-rotate-3 transition-transform duration-500 opacity-5"></div>
                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                                alt="Coding Environment"
                                className="about-image"
                            />
                            <div className="about-img-overlay">
                                <p className="mono text-neon text-sm">&gt; System.init(Profile)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="about-right">
                    <motion.h2
                        className="section-title-left"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        About <span className="text-neon">Me</span>
                    </motion.h2>

                    <p className="about-desc">
                        I am a 3rd Year B.Tech Computer Science student with a passion for building interactive, scalable, and visually stunning web applications. I bridge the gap between engineering logic and creative design.
                    </p>

                    <div className="skills-grid-box">
                        <div className="skill-box border-neon">
                            <h4>Frontend</h4>
                            <p>React, Tailwind, HTML5, CSS3, Three.js</p>
                        </div>
                        <div className="skill-box border-blue">
                            <h4>Backend</h4>
                            <p>Node.js, Express, MongoDB, Python</p>
                        </div>
                        <div className="skill-box border-purple">
                            <h4>Tools</h4>
                            <p>Git, Figma, VS Code, Postman</p>
                        </div>
                        <div className="skill-box border-green">
                            <h4>Core</h4>
                            <p>DSA, OOPs, DBMS, OS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
