
import React from 'react';
import { motion } from 'framer-motion';
import { RESUME } from '../data';
import '../styles/Resume.css';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="section-title">Resume <span className="text-neon">Timeline</span></h2>

                <div className="timeline">
                    {/* Education Item */}
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>{RESUME.education.degree}</h3>
                            <p className="timeline-place">{RESUME.education.institution}</p>
                            <p className="timeline-score">CGPA: 8.8/10</p>
                            <span className="timeline-date">{RESUME.education.year}</span>
                            <p className="timeline-desc">
                                Specializing in Full Stack Development and Artificial Intelligence.
                                Lead of the College Coding Club.
                            </p>
                        </div>
                        <div className="timeline-dot"></div>
                    </div>

                    {/* Certifications Items (Grouped) */}
                    {RESUME.certifications.map((cert, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-content">
                                <h3>Certification</h3>
                                <p className="timeline-place">{cert}</p>
                                <span className="timeline-date">2024</span>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resume;
