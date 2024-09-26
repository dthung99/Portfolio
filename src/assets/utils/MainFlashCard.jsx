import React, { useState } from 'react';
import { CircleChevronRight, CircleChevronDown } from 'lucide-react';

import SmallFlashCard from './SmallFlashCard';

import './MainFlashCard.scss';

const MainFlashCard = ({ title, shortDescription, bodyData, ...prop }) => {
    // Variable to indicate the colapse state of the main flashcard
    const [isMainExpand, setIsMainExpand] = useState(false);

    return (
        <>
            <div className="item-main-flash-card-layout" onClick={() => { if (!isMainExpand) { setIsMainExpand(true) } }} {...prop}>
                <div className="flash-main-card-title" onClick={() => setIsMainExpand(!isMainExpand)}>
                    {isMainExpand ? <CircleChevronDown /> : <CircleChevronRight />}
                    &nbsp; {title}
                </div>
                {isMainExpand ?
                    <div className="flash-main-card-body">
                        {bodyData.map((smallCardData, index) => (
                            <SmallFlashCard
                                key={index}
                                flashCardType={smallCardData.type}
                                flashCardTitle={smallCardData.title}
                                flashCardShortDescription={smallCardData.shortDescription}
                                flashCardFullDescription={smallCardData.fullDescription} />
                        ))}
                    </div>

                    : <> {shortDescription} </>}
            </div>
        </>
    )
};

export default MainFlashCard;
