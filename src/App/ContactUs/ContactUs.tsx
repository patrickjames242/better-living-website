
import React, { useMemo, useState } from 'react';
import { contactUsItems } from '../../helpers/Views/Footer/Footer';
import './ContactUs.scss';
import EmailSVG from './EmailSVG';
import { useField, useForm } from 'react-form';
import { isValidEmail } from '../../helpers/general';

enum FieldType {
    email = 'email',
    name = 'name',
    subject = 'subject',
    description = 'description',
}

// interface Fields{
//     [FieldType.email]: string;
//     [FieldType.name]: string;
//     [FieldType.subject]: string;
//     [FieldType.description]: string;
// }

// const fieldTypes = new Set<FieldType>([
//     FieldType.email,
//     FieldType.name,
//     FieldType.subject,
//     FieldType.description,
// ]);

// function validateFields(fields: Fields): Partial<Fields>{
//     const result: Partial<Fields> = {};
//     fieldTypes.forEach(key => {
//         const value = fields[key];
//         if (typeof value !== 'string') return;
//         if (value.length <= 0){
//             result[key] = 'This field is required';
//         } else if (key === FieldType.email && isValidEmail(value) === false){
//             result[key] = 'This email is not valid';
//         }
//     });
//     return result;
// }



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




const FormView = () => {

    const initialValues = useMemo(() => ({
        [FieldType.email]: '',
        [FieldType.name]: '',
        [FieldType.subject]: '',
        [FieldType.description]: '',
    }), []);

    const { Form, meta } = useForm({
        defaultValues: initialValues,
        onSubmit: async (values, instance) => {

            await new Promise<undefined>(resolve => {
                setTimeout(() => {
                    resolve(undefined);
                }, 2000);
            });

        },
        validate: (values) => {
            for (const key in values){
                const value = values[key];
                if (value.length <= 1){
                    return `The ${key} field is required`;
                } else if (value === FieldType.email && (isValidEmail(FieldType.email) === false)){
                    return 'The email you have entered is not valid.';
                } else {
                    return false;
                }
            }
        }
    });

    console.log(meta.error);

    return <Form className="fields">
        <TextField topTitleText="Your email address" placeholder="john.appleseed@example.com" fieldName={FieldType.email} />
        <TextField topTitleText="Your name" placeholder="How do we address you?" fieldName={FieldType.name} />
        <TextField topTitleText="Subject" placeholder="Let us know how we can help you." fieldName={FieldType.subject} />
        <TextField topTitleText="Full description" placeholder="Please include as much information as possible." isMultiline={true} fieldName={FieldType.description} />
        <button type="submit" className="submit-button">Submit</button>
    </Form>
};





interface TextFieldProps {
    isMultiline?: boolean;
    topTitleText?: string;
    placeholder?: string;
    fieldName: string;
}

const TextField = (props: TextFieldProps) => {

    const [isFocused, setIsFocused] = useState(false);
    const { getInputProps } = useField(props.fieldName, {defaultIsTouched: false});

    const inputProps = getInputProps();

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
            ...inputProps,
            required: true,
            onFocus: () => setIsFocused(true),
            onBlur: (args: any) => {
                setIsFocused(false);
                inputProps.onBlur(args);
            },
        })}
    </div>
}

