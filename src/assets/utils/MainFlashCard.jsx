import React, { useState } from 'react';
import { CircleChevronRight, CircleChevronDown } from 'lucide-react';

import SmallFlashCard from './SmallFlashCard';

import './MainFlashCard.scss';

const MainFlashCard = ({ title, shortDescription, bodyData, expandStatus = false, ...prop }) => {
    // Variable to indicate the colapse state of the main flashcard
    const [isMainExpand, setIsMainExpand] = useState(expandStatus);

    return (
        <>
            <div className="item-main-flash-card-layout" onClick={() => { if (!isMainExpand) { setIsMainExpand(true) } }} {...prop}>
                <div className="flash-main-card-title" onClick={() => setIsMainExpand(!isMainExpand)}>
                    <div className="flash-main-card-title-arrow">
                        {isMainExpand ? <CircleChevronDown /> : <CircleChevronRight />}
                    </div>
                    <div className="flash-main-card-title-text">
                        {title}
                    </div>
                </div>
                {isMainExpand ?
                    <div className="flash-main-card-body">
                        {bodyData.map((smallCardData, index) => (
                            <SmallFlashCard
                                key={index}
                                flashCardType={smallCardData.type}
                                flashCardTitle={smallCardData.title}
                                flashCardShortDescription={smallCardData.shortDescription}
                                expandStatus={smallCardData.defaultExpand}
                                flashCardFullDescription={smallCardData.fullDescription} />
                        ))}
                    </div>
                    :
                    <div className="flash-main-card-body-index">
                        {shortDescription}
                    </div>}
            </div>
        </>
    )
};

export default MainFlashCard;
