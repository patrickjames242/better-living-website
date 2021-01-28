
import React, { useMemo, useState } from 'react';
import { HomeScreenSection } from '../../../App/helpers';
import { Optional } from '../../general';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './HeaderFooterContainer.scss';
import { HeaderFooterContainerContext, HeaderFooterContainerContextValue } from './helpers';


function HeaderFooterContainer(props: React.PropsWithChildren<{}>) {

    const [currentHomeScreenSection, setCurrentHomeScreenSection] = useState<Optional<HomeScreenSection> | undefined>(undefined);
    
    const contextValue: HeaderFooterContainerContextValue = useMemo(() => ({
        currentHomeScreenSection,
        setCurrentHomeScreenSection: (...args) => {
            // console.log('setCurrentHomeScreenSection called');
            setCurrentHomeScreenSection(...args);
        },
    }), [currentHomeScreenSection]);

    // console.log(contextValue.currentHomeScreenSection);

    return <HeaderFooterContainerContext.Provider value={contextValue}>
        <div className="HeaderFooterContainer">
            <NavBar />
            {props.children}
            <Footer />
        </div>
    </HeaderFooterContainerContext.Provider>
}

export default HeaderFooterContainer;
