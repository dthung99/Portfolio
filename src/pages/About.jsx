import React from 'react';
import { ChevronRight } from 'lucide-react';

// Import the data
import education from '../portfolio_data/education.json';
import workExperience from '../portfolio_data/workExperience.json';

import MainFlashCard from '../assets/utils/MainFlashCard';

import './About.scss';

const About = () => {
    return (
        <>
            <div className="about-layout">
                <div className="about-page-introduction-title">My Academic and Industrial Record</div>
                <div className="about-page-introduction-text">
                    TL;DR: I switched from Medicine to Engineering. As a recent graduate, I don't have much work experience.
                </div>
                <div className="about-page-introduction-note">
                    <div className="about-page-introduction-text">
                        Click&nbsp;<ChevronRight size={'1rem'} style={{ background: "rgba(255,255,255,0.1)", borderRadius: '0.5rem', marginBottom: '-0.2rem' }} />&nbsp;to see the full description of my background.
                    </div>
                </div>

                {education.map((educationSection, index) => (
                    <MainFlashCard key={index}
                        title={educationSection.area}
                        shortDescription={educationSection.areaDescription}
                        bodyData={educationSection.educationHistory}
                        expandStatus={educationSection.defaultExpand}
                        style={{ background: educationSection.colorConcept }} />
                ))}
                {workExperience.map((workSection, index) => (
                    <MainFlashCard key={index}
                        title={workSection.area}
                        shortDescription={workSection.areaDescription}
                        bodyData={workSection.educationHistory}
                        expandStatus={workSection.defaultExpand}
                        style={{ background: workSection.colorConcept }} />
                ))}
            </div>
        </>
    );
};

export default About;