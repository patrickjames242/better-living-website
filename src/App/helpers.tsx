import Notification from "../helpers/Notification";


export enum ScreenType{
    home = 'home',
    food = 'food',
    consults = 'consults',
    products = 'products',
    history = 'history',
    contactUs = 'contact-us',
}

export type HomeScreenSection = ScreenType.food | ScreenType.products | ScreenType.consults;

export const GoBackToCurrentHomeScreenSectionNotification = Notification();

export const allScreenTypes = [
    ScreenType.home,
    ScreenType.food,
    ScreenType.consults,
    ScreenType.products,
    ScreenType.history,
    ScreenType.contactUs,
];

export function getTitleForScreenType(screenType: ScreenType){
    switch (screenType){
        case ScreenType.home: return 'Home';
        case ScreenType.contactUs: return 'Contact Us';
        case ScreenType.history: return 'History';
        case ScreenType.food: return 'Food';
        case ScreenType.products: return 'Products';
        case ScreenType.consults: return 'Consults';
    }
}

export function getRouteForScreenType(screenType: ScreenType): string{
    switch (screenType){
        case ScreenType.home:
            return '/';
        case ScreenType.food:
        case ScreenType.products:
        case ScreenType.consults:
            return getRouteForScreenType(ScreenType.home) + screenType + '/';
        case ScreenType.contactUs: 
        case ScreenType.history: 
            return `/${screenType}/`;
    }
}


