
import React, { useLayoutEffect, useState } from 'react';
import { Optional } from '../../helpers/general';
import brocoliImage from './website-brocoli.png';
import './NavBar.scss';
import NavBarMenuButton from './NavBarMenuContent/NavBarMenuButton';
import { NavLinkSelection, allNavLinkSelections, titleForNavLinkSelection, BETTER_LIVING_APP_URL } from './helpers';


function getShouldShowShadow() {
    const x = window.pageYOffset > 20;
    return x;
}



function NavBar() {

    const [currentSelection, setCurrentSelection] = useState<Optional<NavLinkSelection>>(null);

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
            <div className="logo-and-title-holder">
                <img alt="" src={brocoliImage} className="brocoli-image" />
                <div className="better-living-title">
                    Better Living
                </div>
            </div>
            <div className="nav-link-container">
                {allNavLinkSelections.map((selection, index) =>
                    <div
                        className={[
                            "nav-link",
                            ...(currentSelection === selection ? ["selected"] : [])
                        ].join(' ')}
                        key={index}
                        onClick={() => {
                            setCurrentSelection(selection);
                        }}
                    >{titleForNavLinkSelection(selection)}</div>
                )}
            </div>

            <a className="web-app-button" target="_blank" href={BETTER_LIVING_APP_URL} rel="noreferrer">
                Go to Web App
            </a>
            <NavBarMenuButton />
        </div>

    </nav>
}

export default NavBar;




