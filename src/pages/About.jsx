import React from 'react';

// Import the data
import education from '../portfolio_data/education.json';
import workExperience from '../portfolio_data/workExperience.json';

import MainFlashCard from '../assets/utils/MainFlashCard';

import './about.scss';

const About = () => {
    return (
        <>
            <div className="about-layout">
                <div className="about-page-introduction-title">My Academic and Industrial Record</div>
                <div className="about-page-introduction-text">
                    TL;DR: I switched from Medicine to Engineering. As a recent graduate, I don't have much work experience.
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