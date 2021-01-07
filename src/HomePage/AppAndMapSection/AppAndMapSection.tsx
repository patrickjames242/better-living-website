
import React from 'react';
import './AppAndMapSection.scss';
import phoneImage from './appPhoneImage.png';
import phoneImage2 from './appPhoneImage2.png';
import googlePlayBadge from './google-play-badge.png';
import appStoreBadge from './app-store-badge.png';
import { BETTER_LIVING_APP_URL } from '../NavBar/helpers';
import BetterLivingLocationMap from '../../helpers/BetterLivingLocationMap/BetterLivingLocationMap';

export interface AppAndMapSectionProps {

}

function AppAndMapSection(props: AppAndMapSectionProps) {
    return <div className="AppAndMapSection">
        {/* <div className="content"> */}
            <div className="app-section">
                <div className="left-side">
                    <div>
                        <div>
                            <div className="phone-images-holder">
                                <img src={phoneImage2} alt="" className="image-1" />
                                <img src={phoneImage} alt="" className="image-2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-container right-side">
                    <div className="title">Download Our Mobile App Today!</div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, maxime esse eaque tempore culpa placeat minus doloremque voluptatibus a! Porro.</div>
                    <div className="app-store-buttons">
                        <a href="https://apps.apple.com/us/app/better-living-health-center/id1541047557" target="_blank" rel="noreferrer">
                            <img src={appStoreBadge} alt="" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.patrickhanna.betterliving" target="_blank" rel="noreferrer">
                            <img src={googlePlayBadge} alt="" />
                        </a>
                    </div>
                    <a href={BETTER_LIVING_APP_URL} target="_blank" rel="noreferrer" className="web-app-button">
                        Use Web App
                    </a>
                </div>
            </div>
            <div className="map-section">
                <div className="text-container">
                    <div className="title">Come And Visit Us In Person!</div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, maxime esse eaque tempore.</div>
                </div>
                <BetterLivingLocationMap/>
            </div>
        {/* </div> */}

    </div>
}

export default AppAndMapSection;


