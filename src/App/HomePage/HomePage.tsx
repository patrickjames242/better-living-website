
import React, { useCallback, useContext, useEffect, useRef } from 'react';
import IntroSection from './IntroSection/IntroSection';
import './HomePage.scss';
import VeggieFoodSection from './VeggieFoodSection/VeggieFoodSection';
import FoodAndSupplementsSection from './FoodAndSupplements/FoodAndSupplements';
import AppAndMapSection from './AppAndMapSection/AppAndMapSection';
import HealthTipsSection from './HealthTipsSection/HealthTipsSection';
import { AppContext, GoBackToCurrentHomeScreenSectionNotification, HomeScreenSection, ScreenType } from '../helpers';
import { filterString, isDigit, Optional } from '../../helpers/general';
import { HeaderFooterContainerContext } from '../../helpers/Views/HeaderFooterContainer/helpers';
import { useSpring } from 'react-spring';

const getCurrentNavBarHeight = () => {
    const navBarHeightRems = Number(filterString(getComputedStyle(document.body).getPropertyValue('--nav-bar-height'), char => isDigit(char)));
    const documentFontSize = Number(filterString(getComputedStyle(document.documentElement).fontSize, char => isDigit(char)));
    return navBarHeightRems * documentFontSize;
}

function HomePage() {

    const headerFooterContext = useContext(HeaderFooterContainerContext);
    const veggieFoodSection = useRef<HTMLDivElement>(null);
    const productsSection = useRef<HTMLDivElement>(null);

    const appContext = useContext(AppContext);

    const [, activateSpringAnimation] = useSpring(() => ({ y: 0 }));

    const getScrollTopValueForElement = useCallback((element: HTMLDivElement) => {

        const navBarHeight = getCurrentNavBarHeight();
        const elementHeight = element.clientHeight ?? 0;
        const elementDistanceFromTop = element.offsetTop ?? 0;
        const windowHeightWithoutNavBar = window.innerHeight - navBarHeight;

        if (elementHeight < windowHeightWithoutNavBar) {
            return elementDistanceFromTop - ((windowHeightWithoutNavBar - elementHeight) / 2) - navBarHeight;
        } else {
            return elementDistanceFromTop - navBarHeight - 20;
        }
    }, []);

    const reactSpringScrollTo = useCallback((yPosition: number) => {
        activateSpringAnimation({
            y: yPosition,
            reset: true,
            from: { y: window.scrollY },
            ...({
                onFrame: (props: any) => {
                    window.scroll(0, props.y);
                }
            } as any),
        });
    }, [activateSpringAnimation]);

    const scrollToCurrentSection = useCallback(async () => {
        const topValue = (() => {
            switch (appContext.currentScreenType) {
                case ScreenType.food:
                    return getScrollTopValueForElement(veggieFoodSection.current!);
                case ScreenType.products:
                    return getScrollTopValueForElement(productsSection.current!);
                case ScreenType.home:
                    return 0;
            }
        })();
        if (topValue != null) {
            reactSpringScrollTo(topValue);
        }
    }, [appContext.currentScreenType, getScrollTopValueForElement, reactSpringScrollTo]);

    useEffect(() => {
        scrollToCurrentSection();
    }, [scrollToCurrentSection]);

    useEffect(() => {
        const notificationUnlisten = GoBackToCurrentHomeScreenSectionNotification.addListener(() => {
            scrollToCurrentSection();
        });
        const screenSections = [
            {
                element: veggieFoodSection.current!,
                section: ScreenType.food as HomeScreenSection,
            },
            {
                element: productsSection.current!,
                section: ScreenType.products as HomeScreenSection,
            }
        ];
        const windowObserver = () => {

            const navBarHeight = getCurrentNavBarHeight();
            const windowContainerTop = window.scrollY + navBarHeight;
            const windowContainerHeight = window.innerHeight - navBarHeight;

            const targetSection = (() => {
                let sectionToReturn: Optional<HomeScreenSection> = null;
                for (const { element, section } of screenSections) {
                    if (
                        element.offsetTop <= (windowContainerTop + (windowContainerHeight * 0.4)) &&
                        (element.offsetTop + element.offsetHeight) > (windowContainerTop + 100)
                    ) {
                        sectionToReturn = section;
                    } else if (sectionToReturn != null) {
                        return sectionToReturn;
                    }
                }
                return sectionToReturn;
            })();

            headerFooterContext?.setCurrentHomeScreenSection(targetSection);
        }
        window.addEventListener('resize', windowObserver);
        window.addEventListener('scroll', windowObserver);

        return () => {
            window.removeEventListener('resize', windowObserver);
            window.removeEventListener('scroll', windowObserver);
            notificationUnlisten();
        }
    }, [headerFooterContext, scrollToCurrentSection]);

    return <div className="HomePage">
        <IntroSection />
        <VeggieFoodSection ref={veggieFoodSection} />
        <FoodAndSupplementsSection ref={productsSection} />
        <AppAndMapSection />
        <HealthTipsSection />
    </div>
}

export default HomePage;
