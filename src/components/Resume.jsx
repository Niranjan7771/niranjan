
import React from 'react';
import { motion } from 'framer-motion';
import { RESUME } from '../data';
import '../styles/Resume.css';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="section-title text-center mb-12"> <span className="text-bracket">[</span> EDUCATION_LOG <span className="text-bracket">]</span> </h2>

                <div className="timeline">
                    {/* Education Item */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content cyber-panel">
                            <div className="panel-header">DEGREE_INFO</div>
                            <h3>{RESUME.education.degree}</h3>
                            <p className="timeline-place text-neon">{RESUME.education.institution}</p>
                            <span className="timeline-date">{RESUME.education.year}</span>
                            {/* Note: Year/CGPA is now handled in data.js, not hardcoded here */}
                        </div>
                    </div>

                    {/* Certification Wrapper */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content cyber-panel">
                            <div className="panel-header">CERTIFICATIONS</div>
                            <ul className="cert-list">
                                {RESUME.certifications.map((cert, index) => (
                                    <li key={index} className="cert-item">
                                        &gt; {cert}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
