
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="project-tilt-wrapper"
        >
            <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                className="mission-file"
                transitionSpeed={1500}
                scale={1.02}
                gyroscope={true}
            >
                <div className="file-tab" style={{ transform: 'translateZ(30px)' }}>
                    <span className="file-id">MISSION_{project.id}</span>
                </div>

                <div className="file-body" style={{ transformStyle: 'preserve-3d' }}>
                    <div className="file-header" style={{ transform: 'translateZ(20px)' }}>
                        <h3 className="mission-title">{project.title.toUpperCase()}</h3>
                        <div className="security-stamp">TOP_SECRET</div>
                    </div>

                    <div className="mission-img-frame" style={{ transform: 'translateZ(15px)' }}>
                        <img src={project.image} alt={project.title} className="mission-img" />
                        <div className="scan-line-x"></div>
                    </div>

                    <p className="mission-brief" style={{ transform: 'translateZ(10px)' }}>
                        &gt; {project.description}
                    </p>

                    <div className="tech-readout" style={{ transform: 'translateZ(25px)' }}>
                        {project.techStack.map((tech, i) => (
                            <span key={i} className="tech-tag">[{tech}]</span>
                        ))}
                    </div>

                    <div className="action-protocol" style={{ transform: 'translateZ(35px)' }}>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="cyber-btn sm">
                            <FaGithub /> SOURCE
                        </a>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="cyber-btn sm outline">
                            <FaExternalLinkAlt /> DEPLOY
                        </a>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

export default ProjectCard;
