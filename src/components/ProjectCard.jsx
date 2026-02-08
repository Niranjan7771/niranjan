
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="mission-file"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="file-tab">
                <span className="file-id">MISSION_{project.id}</span>
            </div>

            <div className="file-body">
                <div className="file-header">
                    <h3 className="mission-title">{project.title.toUpperCase()}</h3>
                    <div className="security-stamp">TOP_SECRET</div>
                </div>

                <div className="mission-img-frame">
                    <img src={project.image} alt={project.title} className="mission-img" />
                    <div className="scan-line-x"></div>
                </div>

                <p className="mission-brief">
                    &gt; {project.description}
                </p>

                <div className="tech-readout">
                    {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-tag">[{tech}]</span>
                    ))}
                </div>

                <div className="action-protocol">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="cyber-btn sm">
                        <FaGithub /> SOURCE
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="cyber-btn sm outline">
                        <FaExternalLinkAlt /> DEPLOY
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
