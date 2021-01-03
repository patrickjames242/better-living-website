import React from 'react';
import IntroSection from './IntroSection/IntroSection';
import NavBar from './NavBar/NavBar';
import './HomePage.scss';
import VeggieFoodSection from './VeggieFoodSection/VeggieFoodSection';
import FoodAndSupplementsSection from './FoodAndSupplements/FoodAndSupplements';
import Footer from './Footer/Footer';
export interface HomePageProps{
    
}



function HomePage(props: HomePageProps){
    return <div className="HomePage">
        <NavBar />
        <IntroSection/>
        <VeggieFoodSection/>
        <FoodAndSupplementsSection/>
        <Footer/>
    </div>
}

export default HomePage;
