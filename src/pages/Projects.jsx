import React from 'react';

// Import the data
import projects from '../portfolio_data/projects.json';

import MainFlashCard from '../assets/utils/MainFlashCard';

import './Projects.scss';

const Projects = () => {
    return (
        <>
            <div className="project-layout">
                <div className="project-page-introduction-title">A look at My Projects</div>
                <div className="project-page-introduction-text">
                    I had a few projects in some areas; many of them started from my course at King.                </div>
                {projects.map((projectSection, index) => (
                    <MainFlashCard key={index}
                        title={projectSection.projectArea}
                        shortDescription={projectSection.projectAreaDescription}
                        bodyData={projectSection.projects}
                        style={{ background: projectSection.colorConcept }} />
                ))}
            </div>
        </>
    );
};

export default Projects;