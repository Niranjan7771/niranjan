
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="project-card-container"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="project-card-inner"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Front Face */}
                <div className="project-card-front">
                    <div className="card-image-box">
                        <img src={project.image} alt={project.title} />
                        <div className="card-overlay"></div>
                    </div>
                    <div className="card-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-tags">
                            {project.techStack.slice(0, 3).map((tech, i) => (
                                <span key={i}>{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Back Face */}
                <div className="project-card-back">
                    <FaCode className="back-icon" />
                    <h3>Key Tech</h3>
                    <ul>
                        {project.techStack.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                    </ul>
                    <div className="back-links">
                        <a href={project.githubLink} className="btn-small"><FaGithub /> Code</a>
                        <a href={project.demoLink} className="btn-small glass"><FaExternalLinkAlt /> Live</a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
