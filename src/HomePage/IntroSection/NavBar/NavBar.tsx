import React, {useLayoutEffect, useState } from 'react';
import { Optional } from '../../../helpers/general';
import brocoliImage from './website-brocoli.png';
import './NavBar.scss';
import MenuSVG from './MenuSVG';

function getShouldShowShadow(){
    const x = window.pageYOffset > 20;
    return x;
}

function NavBar() {

    enum Selection {
        pricing,
        aboutUs,
        testimonials,
        history,
        contactUs,
    }

    const [currentSelection, setCurrentSelection] = useState<Optional<Selection>>(null);
    
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
                {[
                    Selection.pricing,
                    Selection.aboutUs,
                    Selection.testimonials,
                    Selection.history,
                    Selection.contactUs,
                ].map((selection, index) =>
                    <div
                        className={[
                            "nav-link",
                            ...(currentSelection === selection ? ["selected"] : [])
                        ].join(' ')}
                        key={index}
                        onClick={() => {
                            setCurrentSelection(selection);
                        }}
                    >{(() => {
                        switch (selection) {
                            case Selection.pricing: return 'Pricing';
                            case Selection.aboutUs: return 'About Us';
                            case Selection.testimonials: return 'Testimonials';
                            case Selection.history: return 'History';
                            case Selection.contactUs: return 'Constact Us';
                        }
                    })()}</div>
                )}
            </div>
            <MenuSVG className="menu-svg" />
            <a className="web-app-button" target="_blank" href="https://betterlivingnassau.com" rel="noreferrer">
                Go to Web App
            </a>
        </div>


    </nav>
}

export default NavBar;
