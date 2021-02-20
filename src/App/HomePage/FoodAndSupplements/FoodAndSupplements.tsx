
import React, { useState } from 'react';
import SectionTitleView from '../SectionTitleView/SectionTitleView';
import CheckmarkSVG from './CheckmarkSVG';
import './FoodAndSupplementsSection.scss';


const products = [
    'Natural Vitamins, Minerals & Supplements',
    'Whole Grains & Dry Foods',
    'Drinks, Milks, Juices',
    'Baby Foods',
    'Herbal Teas',
    'Herbal Seasonings',
    'Vegetarian Frozen, Canned & Dry Foods',
    'Nuts, Seeds & Dried Fruits',
    'Natural Oils',
    'Other Miscellaneous Items',
    'Books & Literature',
];

const halfwayCutOff = 6;

const ListItem = (props: { itemString: string }) => {
    return <div className="list-item">
        <CheckmarkSVG />
        <div className="title">{props.itemString}</div>
    </div>
}

const FoodAndSupplementsSection: React.ForwardRefRenderFunction<HTMLDivElement, {}> = function FoodAndSupplementsSection(props, ref) {

    const [seeMore, setSeeMore] = useState(false);

    return <div ref={ref} className="FoodAndSupplementsSection">
        <SectionTitleView
            subtitle="Check Out Our Products"
            title={"We Sell Natural Foods & Supplements"}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo voluptate nihil iusto totam voluptates eos! Numquam, explicabo unde rem, porro earum amet placeat, qui corrupti alias repudiandae adipisci autem."
        />
        <div className="list-items">
            <div className="column">
                {products.slice(0, halfwayCutOff).map((x, index) => {
                    return <ListItem key={index} itemString={x}/>
                })}
            </div>
            <div className={[
                "column",
                ...(seeMore ? ['see-more'] : []),
            ].join(' ')}>
                {products.slice(halfwayCutOff, products.length).map((x, index) => {
                    return <ListItem key={index} itemString={x}/>
                })}
            </div>
        </div>
        <button onClick={() => setSeeMore(x => !x)} className="see-more-button">{seeMore ? "See Less" : "See More"}</button>
    </div>
}

export default React.forwardRef(FoodAndSupplementsSection);
