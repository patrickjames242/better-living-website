
import React, { useState } from 'react';
import { contactUsItems } from '../../helpers/Views/Footer/Footer';
import './ContactUs.scss';
import EmailSVG from './EmailSVG';


function ContactUs() {
    return <div className="ContactUs">
        <div className="title-box">
            <div className="title">Let's Talk</div>
            <div className="subtitle">To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly.</div>
        </div>
        <div className="right-column">
            <div className="illustration">
                <EmailSVG />
            </div>
            <div className="contact-info">
                {contactUsItems.map((x, index) => {
                    return <a className="item" key={index} href={x.href} target="_blank" rel="noreferrer">
                        <div className="icon-holder">
                            <x.iconSVG />
                        </div>
                        <div className="text">{x.title}</div>
                    </a>
                })}
            </div>
        </div>
        <div className="fields">
            <TextField topTitleText="Your email address" placeholder="john.appleseed@example.com" />
            <TextField topTitleText="Your name" placeholder="How do we address you?"/>
            <TextField topTitleText="Subject" placeholder="Let us know how we can help you."/>
            <TextField topTitleText="Full description" placeholder="Please include as much information as possible." isMultiline={true}/>
            <button className="submit-button">Submit</button>
        </div>
    </div>
}

export default ContactUs;

interface TextFieldProps {
    isMultiline?: boolean;
    topTitleText?: string;
    value?: string;
    placeholder?: string;
    onValueChange?: (value: string) => void;
}

const TextField = (props: TextFieldProps) => {

    const [isFocused, setIsFocused] = useState(false);

    return <div className="TextField">
        {props.topTitleText != null && <div 
            className={[
                'title',
                ...(isFocused ? ['focused'] : [])
            ].join(' ')}
        >
            {props.topTitleText}
        </div>}
        {React.createElement(props.isMultiline ? 'textarea' : 'input', {
            className: 'text-input',
            value: props.value,
            placeholder: props.placeholder ?? 'Type here...',
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
            onChange: (x: any) => {
                props.onValueChange?.(x.target.value as string);
            },
        })}
    </div>
}

