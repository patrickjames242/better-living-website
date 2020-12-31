import React from 'react';
import SectionTitleView from '../SectionTitleView/SectionTitleView';
import './FoodAndSupplementsSection.scss';

export interface FoodAndSupplementsSectionProps{
    
}

function FoodAndSupplementsSection(props: FoodAndSupplementsSectionProps){
    return <div className="FoodAndSupplementsSection">
        <SectionTitleView
            subtitle="Check Out Our Food"
            title={"We Sell Natural Foods & Supplements"}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo voluptate nihil iusto totam voluptates eos! Numquam, explicabo unde rem, porro earum amet placeat, qui corrupti alias repudiandae adipisci autem."
        />
    </div>
}

export default FoodAndSupplementsSection;
