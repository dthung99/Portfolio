import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

import './SmallFlashCard.scss';

const SmallFlashCard = ({ flashCardType, flashCardTitle, flashCardShortDescription, flashCardFullDescription, expandStatus = false, ...prop }) => {
    // Variable to indicate the colapse state of the main flashcard
    const [isMainExpand, setIsMainExpand] = useState(expandStatus);
    const FullDescription = () => {
        if (flashCardType === "General") {
            return (
                <>
                    {Object.entries(flashCardFullDescription).map(([key, value]) => {
                        // Check the key and render based on its value
                        if (key === "Link") {
                            return (
                                <div key={key} className='small-flash-card-item' href={value}>
                                    <a href={value} className='small-flash-card-item-link'>{value}</a>
                                </div>
                            );
                        } else if (key === "GitHub") {
                            return (
                                <div key={key} className='small-flash-card-item' href={value}>
                                    Visit my <a href={value} className='small-flash-card-item-link'>GitHub</a>.
                                </div>
                            );
                        } else if (key.startsWith("Image")) {
                            if (key.endsWith("%")) {
                                return (
                                    <div key={key} className='small-flash-card-item'>
                                        <img
                                            src={value}
                                            alt="Image"
                                            className='small-flash-card-item-image'
                                            style={{ width: key.slice(-3) }}
                                        />
                                    </div>
                                );
                            }
                            return (
                                <div key={key} className='small-flash-card-item'>
                                    <img
                                        src={value}
                                        alt="Image"
                                        className='small-flash-card-item-image'
                                    />
                                </div>
                            );
                        } else if (key.startsWith("Publication")) {
                            return (
                                <div key={key} className='small-flash-card-item' href={value}>
                                    &nbsp; <a href={value.url} className='small-flash-card-item-link'>{value.title}</a>
                                </div>
                            );
                        } else if (key.startsWith("OnlineCourse")) {
                            return (
                                <div key={key} className='small-flash-card-item' href={value}>
                                    &nbsp; {value.name}: <a href={value.link} className='small-flash-card-item-link'>Link</a>
                                </div>
                            );
                        } else if (key.startsWith("List")) {
                            return (
                                <div key={key} className='small-flash-card-item'>
                                    <ul className='small-flash-card-item-list'>
                                        {value.map((item, index) => (
                                            <li style={{ marginLeft: '-0.5rem' }} key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        } else if (key.startsWith("Flex-Text")) {
                            return (
                                <div key={key} className='small-flash-card-item'>
                                    <div className="small-flash-card-item-flex-text">
                                        {value.map((item, index) => (
                                            <div key={index}>{item}</div>
                                        ))}
                                    </div>
                                </div>
                            );
                        } else if (key.startsWith("Text")) {
                            return (
                                <div key={key} className='small-flash-card-item'>
                                    <div className="small-flash-card-item-text">
                                        {value}
                                    </div>
                                </div>
                            );
                        };
                        return null; // Return null for unmatched keys
                    })}
                </>
            );
        }
        return (<>No description is available!</>);


    };

    return (
        <>
            <div className="item-small-flash-card-layout" {...prop}>
                <div className="small-flash-card-title" onClick={() => setIsMainExpand(!isMainExpand)}>
                    <div className="small-flash-card-title-arrow">
                        {isMainExpand ? <ChevronDown /> : <ChevronRight />}
                    </div>
                    <div className="small-flash-card-title-text">
                        {flashCardTitle}
                    </div>
                </div>
                {isMainExpand ?
                    <div className="small-flash-card-body">
                        <FullDescription />
                    </div>
                    :
                    <div className="small-flash-card-body-index">
                        {flashCardShortDescription}
                    </div>}
            </div>
        </>
    )
};

export default SmallFlashCard;
