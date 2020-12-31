import React from 'react';
import IntroSection from './IntroSection/IntroSection';
import NavBar from './NavBar/NavBar';
import './HomePage.scss';
import VeggieFoodSection from './VeggieFoodSection/VeggieFoodSection';
import FoodAndSupplementsSection from './FoodAndSupplements/FoodAndSupplements';
export interface HomePageProps{
    
}



function HomePage(props: HomePageProps){
    return <div className="HomePage">
        <NavBar />
        <IntroSection/>
        <VeggieFoodSection/>
        <FoodAndSupplementsSection/>
    </div>
}

export default HomePage;
