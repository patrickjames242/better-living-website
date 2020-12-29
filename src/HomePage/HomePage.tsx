import React from 'react';
import IntroSection from './IntroSection/IntroSection';
import NavBar from './IntroSection/NavBar/NavBar';
import './HomePage.scss';
import VeggieFoodSection from './VeggieFoodSection/VeggieFoodSection';
export interface HomePageProps{
    
}



function HomePage(props: HomePageProps){
    return <div className="HomePage">
        <NavBar />
        <IntroSection/>
        <VeggieFoodSection/>
    </div>
}

export default HomePage;
