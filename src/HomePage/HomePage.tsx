import React from 'react';
import IntroSection from './IntroSection/IntroSection';
import NavBar from './IntroSection/NavBar/NavBar';
import './HomePage.scss';
export interface HomePageProps{
    
}

function HomePage(props: HomePageProps){
    return <div className="HomePage">
        <NavBar />
        <IntroSection/>
    </div>
}

export default HomePage;
