
import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AppContext, getRouteForScreenType, getTitleForScreenType, GoBackToCurrentHomeScreenSectionNotification, ScreenType } from '../../../App/helpers';
import { HeaderFooterContainerContext } from '../HeaderFooterContainer/helpers';

const homeScreenTypes = new Set<ScreenType>([
    ScreenType.home,
    ScreenType.food,
    ScreenType.consults,
    ScreenType.products,
]);

const NavLink: React.FunctionComponent<React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement> & { screenType: ScreenType }>> = function NavLink({screenType, ...props}) {

    const headerFooterContext = useContext(HeaderFooterContainerContext);
    const appContext = useContext(AppContext);

    const matchesCurrentRouteExactly = appContext.currentScreenType === screenType;

    const isSelected = useMemo(() => {
        if (homeScreenTypes.has(appContext.currentScreenType)){
            const homeScreenSection = (() => {
                if (headerFooterContext?.currentHomeScreenSection === null){
                    return ScreenType.home;
                } else if (headerFooterContext?.currentHomeScreenSection === undefined){
                    return appContext.currentScreenType;
                } else {
                    return headerFooterContext.currentHomeScreenSection;
                }
            })();
            return homeScreenSection === screenType;
        } else {
            return matchesCurrentRouteExactly;
        }
    }, [appContext.currentScreenType, headerFooterContext?.currentHomeScreenSection, matchesCurrentRouteExactly, screenType]);

    return <Link
        {...props}
        onClick={(...args) => {
            if (matchesCurrentRouteExactly && screenType !== ScreenType.home){
                GoBackToCurrentHomeScreenSectionNotification.post();
            }
            props.onClick?.(...args);
        }}
        to={getRouteForScreenType(screenType)}
        className={[
            "NavLink",
            ...(isSelected ? ['selected'] : []),
            ...(props.className ? [props.className] : []),
        ].join(' ')}
        
    >
        {getTitleForScreenType(screenType)}
    </Link>

}

export default NavLink;
