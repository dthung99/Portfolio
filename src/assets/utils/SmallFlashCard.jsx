import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

import './SmallFlashCard.scss';

const SmallFlashCard = ({ flashCardType, flashCardTitle, flashCardShortDescription, flashCardFullDescription, ...prop }) => {
    // Variable to indicate the colapse state of the main flashcard
    const [isMainExpand, setIsMainExpand] = useState(false);
    const FullDescription = () => {
        if (flashCardType === "Project") {
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
        } else {
            return (<>Hung</>);
        }

    };

    return (
        <>
            <div className="item-small-flash-card-layout" onClick={() => { if (!isMainExpand) { setIsMainExpand(true) } }} {...prop}>
                <div className="small-flash-card-title" onClick={() => setIsMainExpand(!isMainExpand)}>
                    {isMainExpand ? <ChevronDown /> : <ChevronRight />}
                    &nbsp; {flashCardTitle}
                </div>
                {isMainExpand ?
                    <div className="small-flash-card-body">
                        <FullDescription />
                    </div>
                    :
                    <div className="small-flash-card-body">
                        {flashCardShortDescription}
                    </div>}
            </div>
        </>
    )
};

export default SmallFlashCard;
