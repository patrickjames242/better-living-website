
import React, { useCallback, useState } from 'react';
import { contactUsItems } from '../../helpers/Views/Footer/Footer';
import CheckmarkSVG from '../HomePage/FoodAndSupplements/CheckmarkSVG';
import './ContactUs.scss';
import EmailSVG from './EmailSVG';
import ErrorSVG from './ErrorSVG';


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
        <FormView />
    </div>
}
export default ContactUs;

async function sendMessage(props: {
    email: string,
    name: string,
    subject: string,
    description: string,
}) {
    const result = await fetch('https://better-living-backend.herokuapp.com/send-inquiry/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: props.email,
            name: props.name,
            subject: props.subject,
            description: props.description,
        }),
    });
    const json = await result.json();
    if (json.isSuccess === false) {
        throw new Error(json.errorMessage);
    }
}


const FormView = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);

    type Result = { isSuccess: true } | { isSuccess: false, errorMessage: string } | null;

    const [fetchResult, setFetchResult] = useState<Result>(null);

    const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setFetchResult(null);
        sendMessage({
            email: email.trim(),
            name: name.trim(),
            subject: subject.trim(),
            description: description.trim(),
        }).then(() => {
            setFetchResult({ isSuccess: true })
        }).catch(error => {
            setFetchResult({ isSuccess: false, errorMessage: error.message });
        }).finally(() => {
            setIsSubmitting(false);
        });
    }, [description, email, name, subject]);

    return <form className="fields" onSubmit={onSubmit}>
        <TextField topTitleText="Your email address" placeholder="john.appleseed@example.com" value={email} onValueChange={setEmail} />
        <TextField topTitleText="Your name" placeholder="How do we address you?" value={name} onValueChange={setName} />
        <TextField topTitleText="Subject" placeholder="Let us know how we can help you." value={subject} onValueChange={setSubject} />
        <TextField topTitleText="Full description" placeholder="Please include as much information as possible." isMultiline={true} value={description} onValueChange={setDescription} />
        {fetchResult != null && <div className={[
            'error-or-success-message',
            fetchResult.isSuccess ? 'success' : 'failure',
        ].join(' ')}>
            {fetchResult.isSuccess ? <CheckmarkSVG/> : <ErrorSVG/>}
            <div className="text">
                {fetchResult.isSuccess ? 'Success! Your message was sent!' : fetchResult.errorMessage}
            </div>
        </div>}
        <button className={[
            "submit-button",
            ...(isSubmitting ? ['disabled'] : []),
        ].join(' ')}>{isSubmitting ? 'Loading...' : 'Submit'}</button>
    </form>

};




interface TextFieldProps {
    isMultiline?: boolean;
    topTitleText?: string;
    placeholder?: string;
    value: string;
    onValueChange: (newValue: string) => void;
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
            placeholder: props.placeholder ?? 'Type here...',
            required: true,
            onChange: (args: any) => {
                props.onValueChange(args.target.value);
            },
            onFocus: () => setIsFocused(true),
            onBlur: () => {
                setIsFocused(false);
            },
        })}
    </div>
}

