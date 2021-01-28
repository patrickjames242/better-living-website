
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { allScreenTypes, ScreenType } from '../../../../App/helpers';
import { BETTER_LIVING_APP_URL, compactMap, Optional } from '../../../general';
import NavLink from '../../NavLink/NavLink';
import MenuSVG from '../MenuSVG';
import './NavBarMenuButton.scss';

const getCSSVariableValue = (key: string) => {
    return getComputedStyle(document.body).getPropertyValue(key);
}

const navBarMenuTriangleWidth = getCSSVariableValue('--nav-bar-menu-triangle-width');
const navBarMenuTriangleRightInset = getCSSVariableValue('--nav-bar-menu-triangle-right-inset');
const navBarCollapseMaxWidth = getCSSVariableValue('--nav-bar-collapse-max-width');


const navBarCollapseMediaQuery = matchMedia(`(max-width: ${navBarCollapseMaxWidth})`);



const NavBarMenuButton = () => {

    const [isPresented, setIsPresented] = useState(false);


    const menuSVGRef = useRef<Optional<SVGSVGElement>>(null);
    const navBarMenuRef = useRef<Optional<HTMLDivElement>>(null);

    const updateMenuPositionVals = useCallback(() => {
        const boundingRect = menuSVGRef.current?.getBoundingClientRect();
        navBarMenuRef.current?.style.setProperty('top', (boundingRect?.bottom ?? 0) + 'px');

        const iconCenterXFromRight = document.body.clientWidth - ((boundingRect?.right ?? 0) + window.scrollX) + ((boundingRect?.width ?? 0) / 2);

        const rightValue = `calc(
            ${iconCenterXFromRight}px - (
                ${navBarMenuTriangleRightInset} + (${navBarMenuTriangleWidth} / 2)
            )
        )`;

        navBarMenuRef.current?.style.setProperty('right', rightValue);
    }, []);

    const present = useCallback(() => {
        setIsPresented(true);
    }, []);

    const dismiss = useCallback(() => {
        setIsPresented(false);
    }, []);


    useEffect(() => {
        updateMenuPositionVals();
        window.addEventListener('resize', updateMenuPositionVals);
        window.addEventListener('scroll', updateMenuPositionVals);

        return () => {
            window.removeEventListener('resize', updateMenuPositionVals);
            window.removeEventListener('scroll', updateMenuPositionVals);
        }
    }, [updateMenuPositionVals]);

    // dismisses menu whenever menu button is hidden due to responsiveness
    useEffect(() => {
        function listener(ev: MediaQueryListEvent) {
            if (ev.matches === false) setIsPresented(false);
        }
        navBarCollapseMediaQuery.addEventListener('change', listener);
        return () => navBarCollapseMediaQuery.removeEventListener('change', listener);
    }, []);

    return <>
        <MenuSVG
            ref={menuSVGRef}
            className="menu-svg"
            onClick={present}
            onMouseEnter={present}
            onMouseLeave={dismiss}
        />
        <div
            onClick={() => {
                setIsPresented(false);
            }}
            ref={navBarMenuRef}
            onMouseEnter={present}
            onMouseLeave={dismiss}
            className={[
                'NavBarMenu',
                ...(isPresented ? ['presented'] : []),
            ].join(' ')}
        >
            {(() => {
                const width = 100, height = 70;
                return <svg className="triangle" viewBox={`0 0 ${width} ${height}`}>
                    <polygon points={`0,${height} ${width / 2},0 ${width},${height}`} />
                </svg>
            })()}

            <NavBarMenuContent />
        </div>
    </>
};

export default NavBarMenuButton;


const NavBarMenuContent = React.memo(() => {
    return <div className="NavBarMenuContent">
        <div className="menu-items">
            {compactMap(allScreenTypes, (x, index) => {
                return x === ScreenType.home ? null :
                    <NavLink key={index} screenType={x}/>;
            })}
        </div>
        <a className="web-app-button" target="_blank" href={BETTER_LIVING_APP_URL} rel="noreferrer">
            Go to Web App
        </a>
    </div>
});
