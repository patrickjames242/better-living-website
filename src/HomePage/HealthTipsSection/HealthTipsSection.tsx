
import React, { useEffect, useState } from 'react';
import { Optional } from '../../helpers/general';
import { BETTER_LIVING_APP_URL } from '../NavBar/helpers';
import ArrowSVG from './arrowSVG';
import AudioSVG from './audioSVG';
import './HealthTipsSection.scss';
import { fetchHealthTips, HealthTip, ThumbnailType } from './helpers';
import TextIconSVG from './textIconSVG';




function HealthTipsSection() {

    const [healthTips, setHealthTips] = useState<Optional<HealthTip[]>>(null);

    useEffect(() => {
        fetchHealthTips().then(x => setHealthTips(x));
    }, []);

    return <div className="HealthTipsSection">
        <div className="content">
            <div className="title-cell">
                <div className="title">Check Out Our Health Tips</div>
                <div className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo repellendus accusamus!</div>
                <a href={BETTER_LIVING_APP_URL} className="see-all-button">
                    See All Tips
                </a>
            </div>
            {healthTips?.map((x, index) => <HealthTipCell key={index} healthTip={x} />)}
        </div>
    </div>
}

export default HealthTipsSection;


function HealthTipCell(props: { healthTip: HealthTip }) {
    return <a href={BETTER_LIVING_APP_URL} className="HealthTipCell" onClick={e => {
        e.preventDefault();
    }}>
        <div className="thumbnail-box">
            {(() => {
                if ('thumbnailImageURL' in props.healthTip){
                    return <img src={props.healthTip.thumbnailImageURL} alt="" />;
                } else if (props.healthTip.thumbnailType === ThumbnailType.text){
                    return <TextIconSVG className="text-icon-svg"/>
                } else if (props.healthTip.thumbnailType === ThumbnailType.audio){
                    return <AudioSVG className="audio-icon-svg"/>
                }
            })()}
        </div>
        <div className="text-section">
            <div className="date">{props.healthTip.date.toLocaleString('en-us', {month: 'short', day: 'numeric', year: 'numeric'})}</div>
            <div className="title">{props.healthTip.title}</div>
            <div className="description">{props.healthTip.description}</div>
            <div className="read-more-button">
                <div className="text">See More</div>
                <ArrowSVG/>
            </div>
        </div>
    </a>
}

