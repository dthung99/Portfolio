import React from 'react';
import { ChevronRight } from 'lucide-react';

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
                    I had a few projects in some areas; many of them started from my course at King.
                </div>
                <div className="project-page-introduction-note">
                    <div className="project-page-introduction-text">
                        Click&nbsp;<ChevronRight size={'1rem'} style={{ background: "rgba(255,255,255,0.1)", borderRadius: '0.5rem', marginBottom: '-0.2rem' }} />&nbsp;to see a snapshot and full description of each project.
                    </div>
                </div>
                {projects.map((projectSection, index) => (
                    <MainFlashCard key={index}
                        title={projectSection.projectArea}
                        shortDescription={projectSection.projectAreaDescription}
                        bodyData={projectSection.projects}
                        expandStatus={projectSection.defaultExpand}
                        style={{ background: projectSection.colorConcept, border: '1px solid rgba(255, 255, 255, 0.4)' }} />
                ))}
            </div>
        </>
    );
};

export default Projects;