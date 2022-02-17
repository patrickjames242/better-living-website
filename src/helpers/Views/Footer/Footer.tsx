
import React from 'react';
import { allScreenTypes } from '../../../App/helpers';
import NavLink from '../NavLink/NavLink';
import FacebookSVG from './facebookSVG';
import './Footer.scss';
import LocationSVG from './locationSVG';
import MailSVG from './mailSVG';
import PhoneSVG from './phoneSVG';

interface ContactUsItem {
    title: string;
    iconSVG: any;
    href: string;
}

export const contactUsItems: ContactUsItem[] = [
    {
        title: 'info@betterlivingnassau.com',
        iconSVG: MailSVG,
        href: 'mailto:info@betterlivingnassau.com'
    },
    {
        title: '323-5473 or 328-5658',
        iconSVG: PhoneSVG,
        href: 'tel:2423235473'
    },
    {
        title: 'Facebook',
        iconSVG: FacebookSVG,
        href: 'https://www.facebook.com/Better-Living-Health-Center-Deli-1477766185772763'
    },
    {
        title: 'Balfour Ave. & Palm Beach St.\n7:30am - 4pm, Mon - Fri',
        iconSVG: LocationSVG,
        href: '',
    },
];

interface AdditionalLink {
    title: string;
    href: string;
}

const additionalLinks: AdditionalLink[] = [
    {
        title: 'South Bahamas Conference',
        href: 'https://www.southbahamasconference.org/healthministries',
    },
    {
        title: 'NAD Health Ministries',
        href: 'https://nadhealth.org',
    },
    {
        title: 'Positive Choices',
        href: 'https://www.positivechoices.com',
    },
    {
        title: 'Nedley Health',
        href: 'https://nedleyhealth.com',
    },
    {
        title: 'Amazing Facts',
        href: 'https://amazingfacts.org',
    },
]

function Footer() {
    return <footer className="Footer">
        <div className="background-view" />
        <div className="content">
            <div className="top-section">
                <div className="left-text-container">
                    <div className="title">Better Living is here for you!</div>
                    <div className="subtitle">Feel free to call us, email us, or pay us a visit. We are always excited to see and hear from you.</div>
                </div>
                <div className="quick-links">
                    <div className="links-title">Quick Links</div>
                    {allScreenTypes.map((x, index) => <NavLink className="item" key={index} screenType={x}/>)}
                </div>
                <div className="additional-links">
                    <div className="links-title">Additional Links</div>
                    {additionalLinks.map((x, index) => <a
                        href={x.href}
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
                        href={x.href}
                        target="_blank"
                        rel="noreferrer"
                        className="item"
                        key={index}
                    >
                        <x.iconSVG />
                        <div className="title">{x.title}</div>
                    </a>)}
                </div>
            </div>
            <div className="bottom-section">
                <div>{"©"} Better Living Health Center & Deli. Made With ♥ by <a href="https://patrickhanna.dev" target="_blank" rel="noreferrer">Patrick Hanna</a>.</div>
            </div>
        </div>
    </footer>
}

export default Footer;
