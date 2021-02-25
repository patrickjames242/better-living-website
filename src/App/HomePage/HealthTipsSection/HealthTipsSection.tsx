
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BETTER_LIVING_APP_URL, Optional } from '../../../helpers/general';
import ArrowSVG from './arrowSVG';
import AudioSVG from './audioSVG';
import './HealthTipsSection.scss';
import { fetchHealthTips, HealthTip, ThumbnailType } from './helpers';
import TextIconSVG from './textIconSVG';

const setStylePropIfNeeded = (element: HTMLDivElement, key: string, value: string) => {
    const prevValue = element.style.getPropertyValue(key);
    if (prevValue !== value){
        element.style.setProperty(key, value);
    }
}


function HealthTipsSection() {

    const [healthTips, setHealthTips] = useState<Optional<HealthTip[]>>(null);

    useEffect(() => {
        fetchHealthTips().then(x => setHealthTips(x));
    }, []);

    const rootDiv = useRef<HTMLDivElement>(null);
    const scrollingDiv = useRef<HTMLDivElement>(null);
    const leftGradientDiv = useRef<HTMLDivElement>(null);
    const rightGradientDiv = useRef<HTMLDivElement>(null);

    const listener = useCallback(() => {
        if ((rootDiv.current!.getBoundingClientRect().left ?? 0) > 1){
            
            const _scrollingDiv = scrollingDiv.current!;
            const padding = 10;

            setStylePropIfNeeded(leftGradientDiv.current!, 'opacity', _scrollingDiv.scrollLeft >= padding ? '1' : '0');
            setStylePropIfNeeded(rightGradientDiv.current!, 'opacity', (_scrollingDiv.clientWidth + _scrollingDiv.scrollLeft) >= (_scrollingDiv.scrollWidth - padding) ? '0' : '1');

        } else {
            setStylePropIfNeeded(leftGradientDiv.current!, 'opacity', '0');
            setStylePropIfNeeded(rightGradientDiv.current!, 'opacity', '0');
        }
    }, []);

    useEffect(() => {        
        const _scrollingDiv = scrollingDiv.current!;
        window.addEventListener('resize', listener);
        _scrollingDiv?.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('resize', listener);
            _scrollingDiv.removeEventListener('scroll', listener);
        }
    }, [listener]);

    useLayoutEffect(listener, [listener, healthTips]);

    return <div className="HealthTipsSection" ref={rootDiv}>
        
        <div className="left-gradient" ref={leftGradientDiv}/>
        <div className="right-gradient" ref={rightGradientDiv}/>

        <div className="content-holder" ref={scrollingDiv}>
            <div className="content">
                <div className="title-cell">
                    <div className="title">Check Out Our Health Tips</div>
                    <div className="description">We try to release an informative health tip once per week. Check them out on our app.</div>
                    <a href={BETTER_LIVING_APP_URL + '/?initialTabSelection=healthTips'} target="_blank" rel="noreferrer" className="see-all-button">
                        See All Tips
                    </a>
                </div>
                {healthTips?.map((x, index) => <HealthTipCell key={index} healthTip={x} />)}
            </div>
        </div>
    </div>
}

export default HealthTipsSection;



function HealthTipCell(props: { healthTip: HealthTip }) {
    const healthTipURL = BETTER_LIVING_APP_URL + '/?initialHealthTipId=' + props.healthTip.id;
    return <a href={healthTipURL} target="_blank" rel="noreferrer" className="HealthTipCell">
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

