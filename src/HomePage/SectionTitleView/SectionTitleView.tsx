import React from 'react';
import './SectionTitleView.scss';
export interface SectionTitleViewProps{
    subtitle: string;
    title: string;
    description?: string;
}

function SectionTitleView(props: SectionTitleViewProps){
    return <div className="SectionTitleView">
        <div className="subtitle">{props.subtitle}</div>
        <h2 className="title">{props.title}</h2>
        {props.description != null && <div className="description">{props.description}</div>}
    </div>
}

export default SectionTitleView;
