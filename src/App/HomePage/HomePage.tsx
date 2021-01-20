
import React, { useCallback, useEffect, useRef } from 'react';
import IntroSection from './IntroSection/IntroSection';
import './HomePage.scss';
import VeggieFoodSection from './VeggieFoodSection/VeggieFoodSection';
import FoodAndSupplementsSection from './FoodAndSupplements/FoodAndSupplements';
import AppAndMapSection from './AppAndMapSection/AppAndMapSection';
import HealthTipsSection from './HealthTipsSection/HealthTipsSection';
import { useRouteMatch } from 'react-router-dom';
import { GoBackToCurrentHomeScreenSectionNotification, ScreenType } from '../helpers';
import { filterString, isDigit } from '../../helpers/general';


function HomePage() {

    const veggieFoodSection = useRef<HTMLDivElement>(null);
    const productsSection = useRef<HTMLDivElement>(null);

    const routeMatch = useRouteMatch<{section?: string}>();

    const scrollToCurrentSection = useCallback(() => {
        const navBarHeightRems = Number(filterString(getComputedStyle(document.body).getPropertyValue('--nav-bar-height'), char => isDigit(char)));
        const documentFontSize = Number(filterString(getComputedStyle(document.documentElement).fontSize, char => isDigit(char))); 

        const navBarHeight = navBarHeightRems * documentFontSize

        const sectionInfo: {height: number, distanceFromTop: number} | undefined = (() => {
            switch (routeMatch.params.section){
                case ScreenType.food:
                    return {
                        height: veggieFoodSection.current?.clientHeight ?? 0,
                        distanceFromTop: (veggieFoodSection.current?.offsetTop ?? 0),
                    };
                case ScreenType.products:
                    return {
                        height: productsSection.current?.clientHeight ?? 0,
                        distanceFromTop: (productsSection.current?.offsetTop ?? 0),
                    };
            }
        })();

        if (sectionInfo == null) return;
        
        const top = (() => {
            const windowHeightWithoutNavBar = window.innerHeight - navBarHeight;
            if (sectionInfo.height < windowHeightWithoutNavBar) {
                return sectionInfo.distanceFromTop - ((windowHeightWithoutNavBar - sectionInfo.height) / 2) - navBarHeight;
            } else {
                return sectionInfo.distanceFromTop - navBarHeight - 20;
            }
        })();
        
        window.scrollTo({
            top,
            behavior: 'smooth',
        });
    }, [routeMatch.params.section]);

    useEffect(() => {
        scrollToCurrentSection();
        return GoBackToCurrentHomeScreenSectionNotification.addListener(scrollToCurrentSection);
    }, [scrollToCurrentSection]);

    return <div className="HomePage">
        <IntroSection />
        <VeggieFoodSection ref={veggieFoodSection} />
        <FoodAndSupplementsSection ref={productsSection} />
        <AppAndMapSection />
        <HealthTipsSection />
    </div>
}

export default HomePage;
