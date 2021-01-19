import React from 'react';
import IntroSection from './IntroSection/IntroSection';
import './HomePage.scss';
import VeggieFoodSection from './VeggieFoodSection/VeggieFoodSection';
import FoodAndSupplementsSection from './FoodAndSupplements/FoodAndSupplements';
import AppAndMapSection from './AppAndMapSection/AppAndMapSection';
import HealthTipsSection from './HealthTipsSection/HealthTipsSection';


function HomePage() {
    return <div className="HomePage">
        <IntroSection />
        <VeggieFoodSection />
        <FoodAndSupplementsSection />
        <AppAndMapSection />
        <HealthTipsSection />
    </div>
}

export default HomePage;
