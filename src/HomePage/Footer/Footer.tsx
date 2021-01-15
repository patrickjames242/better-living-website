import React from 'react';
import { allNavLinkSelections, titleForNavLinkSelection } from '../NavBar/helpers';
import FacebookSVG from './facebookSVG';
import './Footer.scss';
import LocationSVG from './locationSVG';
import MailSVG from './mailSVG';
import PhoneSVG from './phoneSVG';

interface ContactUsItem {
    title: string;
    iconSVG: any;
}

const contactUsItems: ContactUsItem[] = [
    {
        title: 'info@betterlivingnassau.com',
        iconSVG: MailSVG,
    },
    {
        title: '(242) 323-5473',
        iconSVG: PhoneSVG,
    },
    {
        title: 'Facebook',
        iconSVG: FacebookSVG,
    },
    {
        title: 'Balfour Ave. & Palm Beach St.\n7:30am - 5pm, Mon - Fri',
        iconSVG: LocationSVG,
    },
];

interface AdditionalLink {
    title: string;
    link: string;
}

const additionalLinks: AdditionalLink[] = [
    {
        title: 'South Bahamas Conference',
        link: 'https://www.southbahamasconference.org/healthministries',
    },
    {
        title: 'NAD Health Ministries',
        link: 'https://nadhealth.org',
    },
    {
        title: 'Positive Choices',
        link: 'https://www.positivechoices.com',
    },
    {
        title: 'Nedley Health',
        link: 'https://nedleyhealth.com',
    },
]

function Footer() {
    return <footer className="Footer">
        <div className="background-view" />
        <div className="content">
            <div className="top-section">
                <div className="left-text-container">
                    <div className="title">Lorem ipsum dolor sit amet</div>
                    <div className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil, repellendus nemo explicabo.</div>
                </div>
                <div className="quick-links">
                    <div className="links-title">Quick Links</div>
                    {allNavLinkSelections.map((x, index) => <a
                        onClick={x => x.preventDefault()}
                        href="/"
                        key={index}
                        className="item"
                    >
                        {titleForNavLinkSelection(x)}
                    </a>)}
                </div>
                <div className="additional-links">
                    <div className="links-title">Additional Links</div>
                    {additionalLinks.map((x, index) => <a
                        onClick={x => x.preventDefault()}
                        href={x.link}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                        className="item"
                    >
                        {x.title}
                    </a>)}
                </div>
                <div className="contact-column">
                    <div className="links-title">Get In Touch</div>
                    {contactUsItems.map((x, index) => <a
                        onClick={x => x.preventDefault()}
                        href="/"
                        className="item"
                        key={index}
                    >
                        <x.iconSVG />
                        <div className="title">{x.title}</div>
                    </a>)}
                </div>
            </div>
            <div className="bottom-section">
                <div>{"© Better Living Health Center & Deli. Made With ♥ by Patrick Hanna."}</div>
            </div>
        </div>
    </footer>
}

export default Footer;
