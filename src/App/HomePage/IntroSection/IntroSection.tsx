
import React from 'react';
import EatingSVG from './icons/EatingSVG';
import AppleSVG from './icons/apple';
import './IntroSection.scss';
import ClipboardSVG from './icons/clipboard';
import PillSVG from './icons/pill';

function IntroSection() {

    return <div className="IntroSection">
        <div className="left-side">
            <div className="top-subtitle">#1 Bahamian Health Store</div>
            <div className="title">Every Spending Counts. Invest it.</div>
            <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet odit blanditiis, beatae eum inventore reiciendis illo laborum dolorem. Earum, exercitationem expedita iusto pariatur nobis consequatur?
            </div>
            <div className="services-container">
                {[
                    {
                        svg: AppleSVG,
                        title: 'Veggie Food',
                    },
                    {
                        svg: ClipboardSVG,
                        title: 'Health Consults',
                    },
                    {
                        svg: PillSVG,
                        title: 'Dietary Supplements',
                    },
                ].map(({ svg: SVG, title }, index) =>
                    <div key={index} className="service">
                        <SVG/>
                        <span className="title">{title}</span>
                    </div>
                )}
            </div>
            <a href="/" className="learn-more-button">
                Learn More
            </a>
        </div>
        <div className="right-side">
            <EatingSVG />
        </div>
    </div>
}

export default IntroSection;


