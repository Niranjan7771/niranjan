
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="text-bracket">&lt;</span> CLASSIFIED_INTEL <span className="text-bracket">/&gt;</span>
                </h2>
                <div className="section-subtitle">AUTHORIZED_PERSONNEL_ONLY</div>
            </div>

            <div className="projects-grid">
                {PROJECTS.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Background decoration */}
            <div className="bg-grid-lines"></div>
        </section>
    );
};

export default Projects;
