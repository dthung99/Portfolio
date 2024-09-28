import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss'
import { CSSVariable } from '../color_variables/CSSVariable';

const FullSizeFlashcard = ({ link, title, description, ...props }) => {
    return (
        <>
            <Link to={link} className="home-flash-card-layout" {...props} >
                <div className="big-text">{title}</div>
                <div className="small-text">{description}</div>
            </Link>
        </>
    );
};

const Home = () => {
    const introduction = 'Hi, I\'m Hung. You can call me Evan.';
    const myProjectsDescription = 'I\'m a curious and eager learner, which is why you could find a lot of projects in various areas.';
    const aboutMeDescription = 'A little information about my education and work experiences.';
    const letConnectDescription = '';

    return (
        <>
            <div className="home-main-layout">
                <div className="main-layout-intro">
                    <div className='intro-layout'>
                        <div className="big-intro-text">
                            Hi, I'm Hung. You can call me Evan.
                        </div>
                        <div className="small-intro-text" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                            I’m a software engineer - or at least I aspire to be one.
                        </div>
                        <div className="small-intro-text" style={{ fontSize: '0.75rem' }}>
                            I have quite a unique background. I earned my MD degree in Vietnam but later decided to switch to engineering.
                            The reason? I’ve always had a passion for mathematics, and I feel that engineering and programming come naturally to me.
                            I obtained an MSc in Biomedical Engineering from King’s College London, focusing on AI and Robotics Engineering in Medicine.
                            It was a fantastic course where I accumulated a tremendous amount of technical skills and commercial awareness.
                        </div>
                    </div>
                </div>
                <div className="main-layout-grid">
                    <div className="layout-item">
                        <FullSizeFlashcard link={'/Projects'} title={'My Projects'} description={myProjectsDescription} style={{ background: CSSVariable.concept_1 }} />
                    </div>
                    <div className="layout-item">
                        <FullSizeFlashcard link={'/About'} title={'About me'} description={aboutMeDescription} style={{ background: CSSVariable.concept_2 }} />
                    </div>
                    <div className="layout-item">
                        <FullSizeFlashcard link={'/Connect'} title={'Let\'s Connect'} description={letConnectDescription} style={{ background: CSSVariable.concept_3 }} />
                    </div>
                    <div className="layout-item">
                        <FullSizeFlashcard link={'/ConnectHidden'} title={'...'} description={''} style={{ background: 'inherit' }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;