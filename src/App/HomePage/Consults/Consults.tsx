
import './Consults.scss';
import React from 'react';
import SectionTitleView from '../SectionTitleView/SectionTitleView';
import picture1 from './Picture1.png';
import picture2 from './Picture2.png';
import picture3 from './Picture3.png';
import ChevronSVG from './ChevronSVG';


const ImageContainer = (props: { imageURL: string }) => {
    return <div className="ImageContainer">
        <div>
            <div>
                <img src={props.imageURL} alt="" />
            </div>
        </div>
    </div>
};

const TitleSubtitleContainer = (props: {
    title: string,
    description: string,
}) => {
    return <div className="TitleSubtitleContainer">
        <div className="line" />
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
    </div>
}

const Consults: React.ForwardRefRenderFunction<HTMLDivElement, {}> = function Consults(props, ref) {
    return <div ref={ref} className="Consults">
        <div className="background-view" />
        <SectionTitleView
            subtitle="Let Us Help You"
            title={"We Offer Consults in Health & Wellness"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero unde doloribus dicta. Delectus neque reiciendis doloribus illum nostrum illo, itaque sed alias. Minima neque voluptate optio, accusantium quidem placeat error unde fugit?"}
        />
        <div className="content">
            <div className="corporate-wellness-container">
                <div className="left-section">
                    <ImageContainer imageURL={picture3} />
                    <ImageContainer imageURL={picture1} />
                    <ImageContainer imageURL={picture2} />
                    <ImageContainer imageURL={picture3} />
                </div>
                <TitleSubtitleContainer title="Coporate, Employee, & Group Wellness Seminars & Programs" description="Employee wellness seminars are very effective in raising the morale of your staff, decreasing absenteeism and the amount of National Insurance claims." />
            </div>
            <div className="personal-wellness-container">
                <TitleSubtitleContainer title="Dietitian's Consultation Office For Lifestyle Plans" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum aut quas eligendi quae illum magni maxime ad fugiat sunt!" />
                <div className="column">
                    {[
                        'Vegetarian Lifestyle',
                        'High Cholesterol',
                        'Diabetes',
                        'Food Allergies',
                        'Crohn\'s Disease',

                    ].map((x, index) => (
                        <div className="item" key={index}>
                            <ChevronSVG />
                            <div className="title">{x}</div>
                        </div>
                    ))}
                </div>
                <div className="column">
                    {[
                        'Acid Reflux',
                        'Arthritis',
                        'Blood Pressure',
                        'Yeast Infection',
                        'Weight Management',
                    ].map((x, index) => (
                        <div className="item" key={index}>
                            <ChevronSVG />
                            <div className="title">{x}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
}

export default React.forwardRef(Consults);

