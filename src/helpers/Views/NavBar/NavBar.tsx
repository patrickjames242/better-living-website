
import React, { useLayoutEffect, useState } from 'react';
import { BETTER_LIVING_APP_URL, compactMap } from '../../general';
import brocoliImage from './website-brocoli.png';
import './NavBar.scss';
import NavBarMenuButton from './NavBarMenuButton/NavBarMenuButton';
import { Link } from 'react-router-dom';
import { allScreenTypes, getRouteForScreenType, ScreenType } from '../../../App/helpers';
import NavLink from '../NavLink/NavLink';



function getShouldShowShadow() {
    const x = window.pageYOffset > 20;
    return x;
}

function NavBar() {

    const [shouldShowShadow, setShouldShowShadow] = useState(getShouldShowShadow());

    useLayoutEffect(() => {
        setShouldShowShadow(getShouldShowShadow());
        const listener = () => {
            setShouldShowShadow(getShouldShowShadow());
        }
        window?.addEventListener('scroll', listener);
        return () => window?.removeEventListener('scroll', listener);
    }, []);

    return <nav className={[
        "NavBar",
        ...(shouldShowShadow ? ["scrolled-up"] : []),
    ].join(' ')}>
        <div className="content">
            <Link to={getRouteForScreenType(ScreenType.home)} className="logo-and-title-holder">
                <img alt="" src={brocoliImage} className="brocoli-image" />
                <div className="better-living-title">
                    Better Living
                </div>
            </Link>
            <div className="nav-link-container">
                {compactMap(allScreenTypes, (selection, index) => {
                    if (selection === ScreenType.home) return null;
                    return <NavLink key={index} screenType={selection} />
                })}
            </div>
            <a className="web-app-button" target="_blank" href={BETTER_LIVING_APP_URL} rel="noreferrer">
                Go to Web App
            </a>
            <NavBarMenuButton />
        </div>
    </nav>
}

export default NavBar;




