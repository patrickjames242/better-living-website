import React from 'react';
import IntroSection from './IntroSection/IntroSection';
import NavBar from './NavBar/NavBar';
import './HomePage.scss';
import VeggieFoodSection from './VeggieFoodSection/VeggieFoodSection';
import FoodAndSupplementsSection from './FoodAndSupplements/FoodAndSupplements';
import Footer from './Footer/Footer';
import AppAndMapSection from './AppAndMapSection/AppAndMapSection';

export interface HomePageProps{
    
}



function HomePage(props: HomePageProps){
    return <div className="HomePage">
        <NavBar />
        <IntroSection/>
        <VeggieFoodSection/>
        <FoodAndSupplementsSection/>
        <AppAndMapSection/>
        {/* <Footer/> */}
    </div>
}

export default HomePage;
