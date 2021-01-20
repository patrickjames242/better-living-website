import React, { useMemo } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { getRouteForScreenType, getTitleForScreenType, GoBackToCurrentHomeScreenSectionNotification, ScreenType } from '../../../App/helpers';


function NavLink(props: React.PropsWithChildren<{ screenType: ScreenType }>) {

    const location = useLocation();

    const isSelected = useMemo(() => {
        return matchPath(location.pathname, {
            path: getRouteForScreenType(props.screenType),
            exact: true,
        }) !== null;
    }, [location.pathname, props.screenType]);

    return <Link
        onClick={() => {
            if (isSelected){
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
