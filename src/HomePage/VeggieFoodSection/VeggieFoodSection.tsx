import React from 'react';
import BurgerSVG from './icons/BurgerSVG';
import SaladSVG from './icons/SaladSVG';
import SoupSVG from './icons/SoupSVG';
import './VeggieFoodSection.scss';


export interface VeggieFoodSectionProps{
    
}

function VeggieFoodSection(props: VeggieFoodSectionProps){
    return <div className="VeggieFoodSection">
        <div className="background-view"/>
        <div className="title-view">
            <div className="subtitle">Check Out Our Food</div>
            <div className="title">Serving Vegetarian Breakfast & Lunch</div>
            {/* <div className="bar"/> */}
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero unde doloribus dicta. Delectus neque reiciendis doloribus illum nostrum illo, itaque sed alias. Minima neque voluptate optio, accusantium quidem placeat error unde fugit?</div>
        </div>
        <div className="info-boxes">
            <div className="content-holder">
            {[
                {
                    svg: BurgerSVG,
                    title: 'Scrumptious Vegetarian Whoppers',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam, consequuntur inventore quasi perferendis mollitia assumenda?',
                },
                {
                    svg: SoupSVG,
                    title: 'A Different Soup Each Day',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam, consequuntur inventore quasi perferendis mollitia assumenda?',
                },
                {
                    svg: SaladSVG,
                    title: 'Vegan Salad Bar',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam, consequuntur inventore quasi perferendis mollitia assumenda?',
                },
                {
                    svg: BurgerSVG,
                    title: 'Scrumptious Vegetarian Whoppers',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam, consequuntur inventore quasi perferendis mollitia assumenda?',
                },
                {
                    svg: BurgerSVG,
                    title: 'Scrumptious Vegetarian Whoppers',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam, consequuntur inventore quasi perferendis mollitia assumenda?',
                },
                {
                    svg: BurgerSVG,
                    title: 'Scrumptious Vegetarian Whoppers',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam, consequuntur inventore quasi perferendis mollitia assumenda?',
                },
            ].map((x, index) => 
                <div key={index} className="info-box">
                    <x.svg/>
                    <div className="title">{x.title}</div>
                    <div className="description">{x.description}</div>
                </div>
            )}
            </div>
            
        </div>
    </div>
}

export default VeggieFoodSection;
