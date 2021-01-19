

export enum ScreenType{
    home = 'home',
    contactUs = 'contact-us',
    history = 'history',
}

export function getRouteForScreenType(screenType: ScreenType){
    switch (screenType){
        case ScreenType.home: return '/';
        case ScreenType.contactUs: return '/contact-us';
        case ScreenType.history: return '/history';
    }
}

