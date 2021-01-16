export enum NavLinkSelection {
    pricing,
    aboutUs,
    testimonials,
    history,
    contactUs,
}

export const allNavLinkSelections = [
    NavLinkSelection.pricing,
    NavLinkSelection.aboutUs,
    NavLinkSelection.testimonials,
    NavLinkSelection.history,
    NavLinkSelection.contactUs,
];

export function titleForNavLinkSelection(selection: NavLinkSelection){
    switch (selection) {
        case NavLinkSelection.pricing: return 'Pricing';
        case NavLinkSelection.aboutUs: return 'About Us';
        case NavLinkSelection.testimonials: return 'Testimonials';
        case NavLinkSelection.history: return 'History';
        case NavLinkSelection.contactUs: return 'Contact Us';
    }
}

