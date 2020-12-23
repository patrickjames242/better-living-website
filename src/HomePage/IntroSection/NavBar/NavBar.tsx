import React, { useState } from 'react';
import { Optional } from '../../../helpers/general';
import brocoliImage from './website-brocoli.png';
import './NavBar.scss';
import MenuSVG from './MenuSVG';



function NavBar() {

    enum Selection {
        pricing,
        aboutUs,
        testimonials,
        history,
        contactUs,
    }

    const [currentSelection, setCurrentSelection] = useState<Optional<Selection>>(null);

    const brocoliImageJsx = (additionalClass?: string) => <img alt="" src={brocoliImage} className={`brocoli-image ${additionalClass ?? ''}`} />;    

    return <nav className="NavBar">
        <div className="logo-and-title-holder">
            {brocoliImageJsx('left')}
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
        <MenuSVG className="menu-svg"/>
        {brocoliImageJsx('center')}
        <a className="web-app-button" target="_blank" href="https://betterlivingnassau.com" rel="noreferrer">
            Go to Web App
        </a>

    </nav>
}

export default NavBar;