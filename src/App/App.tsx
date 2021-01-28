

import React, { useMemo } from 'react';
import './App.scss';
import HomePage from './HomePage/HomePage';
import { BrowserRouter as Router, useLocation, matchPath } from 'react-router-dom';
import HeaderFooterContainer from '../helpers/Views/HeaderFooterContainer/HeaderFooterContainer';
import { AppContext, AppContextValue, getRouteForScreenType, ScreenType } from './helpers';
import { useUpdateLayoutEffect } from '../helpers/general';

function App() {
	return <Router>
		{/* eslint-disable-next-line react/jsx-pascal-case */}
		<_App />
	</Router>
}

function _App() {

	const location = useLocation();

	const appContext: AppContextValue = useMemo(() => {
		const currentScreenType = (() => {
			for (const screenType of [
				ScreenType.contactUs,
				ScreenType.history,
				ScreenType.food,
				ScreenType.consults,
				ScreenType.products,
			]) {
				if (matchPath(location.pathname, {
					path: getRouteForScreenType(screenType),
				}) != null) {
					return screenType;
				}
			}
			return ScreenType.home;
		})();
		return {
			currentScreenType,
		}
	}, [location.pathname]);

	const screenToDisplay = useMemo(() => {
		switch (appContext.currentScreenType) {
			case ScreenType.contactUs:
			case ScreenType.history:
				return appContext.currentScreenType;
			default:
				return ScreenType.home
		}
	}, [appContext.currentScreenType]);

	useUpdateLayoutEffect(() => {
		window.scrollTo({top: 0});
	}, [screenToDisplay]);

	return <AppContext.Provider value={appContext}>
		<div className="App">
			<HeaderFooterContainer>
				{(() => {
					switch (screenToDisplay) {
						case ScreenType.contactUs:
							return <div style={{ padding: 100, backgroundColor: 'red' }}>
								Contact Us!
								</div>;
						case ScreenType.history:
							return <div style={{ backgroundColor: 'blue', padding: 100 }}>
								History!
								</div>;
						default:
							return <HomePage />
					}
				})()}
			</HeaderFooterContainer>
		</div>
	</AppContext.Provider>
}

export default App;


