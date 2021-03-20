
import React from 'react';
import { BETTER_LIVING_APP_URL } from '../../../helpers/general';
import SectionTitleView from '../SectionTitleView/SectionTitleView';
import BurgerSVG from './icons/BurgerSVG';
import SaladSVG from './icons/SaladSVG';
import SoupSVG from './icons/SoupSVG';
import LunchSVG from './LunchSVG';
import BreakfastSVG from './BreakfastSVG';
import './VeggieFoodSection.scss';
import DessertsSVG from './icons/DessertsSVG';


const VeggieFoodSection: React.ForwardRefRenderFunction<HTMLDivElement, {}> = function VeggieFoodSection(props, ref){
    return <div ref={ref} className="VeggieFoodSection">
        <SectionTitleView
            subtitle="Check Out Our Food"
            title={"We Serve Vegetarian Breakfast & Lunch"}
            description="We serve scrumptious vegetarian (mostly vegan) dishes with a good variety for breakfast as well as an even greater variety for lunch, including 5 different entrees  each day, and a variety of vegetables and starches, along with sandwiches breads and pastries!"
        />
        <a href={BETTER_LIVING_APP_URL + '/?initialTabSelection=todaysMenu'} target="_blank" rel="noreferrer" className="see-todays-menu">
            <span className="text">See Today's Menu</span>
        </a>
        <div className="info-boxes">
            <div className="content-holder">
            {[
                {
                    svg: BurgerSVG,
                    title: 'Scrumptious Vegetarian Whoppers',
                    description: 'You can choose between our Vegetarian Fri-pat Whopper, our vegan Black Bean or Garbanzo Whopper and our Deli Sandwiches.',
                },
                {
                    svg: SoupSVG,
                    title: 'A Different Vegan Soup Each Day',
                    description: 'Our daily vegan soups include Pumpkin Soup, Okra Soup, Cashew Cheesy Broccoli Soup, Peas Soup and Dough and Bean Soup.',
                },
                {
                    svg: SaladSVG,
                    title: 'Vegan Salad Bar',
                    description: 'Our salads are beautifully dressed with carrots, purple cabbage, onions, tomatoes, and more, along with our homemade sunflower dressings.',
                },
                {
                    svg: LunchSVG,
                    title: 'A Daily Lunch Menu',
                    description: 'We provide at least 5 different entrees every day, a variety of starches like brown rice and peas and grits, and vegetable sides like cabbage and string beans.',
                },
                {
                    svg: BreakfastSVG,
                    title: 'A Daily Breakfast Menu',
                    description: 'Our breakfast menu consists of foods like Vegan Big Frank Stew, Breakfast Spaghetti, Vegan Tuno, Vegan Souse, Vege-Leanies, and Vege-Cornbeef.',
                },
                {
                    svg: DessertsSVG,
                    title: 'Desserts',
                    description: 'Our homemade breads and pastries consist of whole wheat raisin coconut rolls and loaves, home-made raisin cookies, Oatmeal cookies, Granola Bar, and more.',
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

export default React.forwardRef(VeggieFoodSection);
