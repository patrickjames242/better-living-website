
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

function NavLink(props: React.PropsWithChildren<{ screenType: ScreenType }>) {

    const headerFooterContext = useContext(HeaderFooterContainerContext);
    const appContext = useContext(AppContext);

    const matchesCurrentRouteExactly = appContext.currentScreenType === props.screenType;

    const isSelected = useMemo(() => {
        if (homeScreenTypes.has(appContext.currentScreenType)){
            return (headerFooterContext?.currentHomeScreenSection ?? ScreenType.home) === props.screenType;
        } else {
            return matchesCurrentRouteExactly;
        }
    }, [appContext.currentScreenType, headerFooterContext?.currentHomeScreenSection, matchesCurrentRouteExactly, props.screenType]);

    return <Link
        onClick={() => {
            if (matchesCurrentRouteExactly){
                GoBackToCurrentHomeScreenSectionNotification.post();
            }
        }}
        to={getRouteForScreenType(props.screenType)}
        className={[
            "NavLink",
            ...(isSelected ? ['selected'] : []),
        ].join(' ')}
    >
        {getTitleForScreenType(props.screenType)}
    </Link>

}

export default NavLink;
