
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Featured <span className="text-neon">Projects</span>
            </motion.h2>
            <div className="projects-grid">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
