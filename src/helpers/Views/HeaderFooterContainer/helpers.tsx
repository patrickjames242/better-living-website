import React from 'react';
import { HomeScreenSection } from '../../../App/helpers';
import { Optional } from '../../general';


export interface HeaderFooterContainerContextValue{
    currentHomeScreenSection: Optional<HomeScreenSection>;
    setCurrentHomeScreenSection: (newSection: Optional<HomeScreenSection>) => void;
}

export const HeaderFooterContainerContext = React.createContext<Optional<HeaderFooterContainerContextValue>>(null);
