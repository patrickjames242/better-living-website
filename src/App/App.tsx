

import React from 'react';
import './App.scss';
import HomePage from './HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderFooterContainer from '../helpers/Views/HeaderFooterContainer/HeaderFooterContainer';
import { getRouteForScreenType, ScreenType } from './helpers';

function App() {
	return <Router>
		<div className="App">
			<HeaderFooterContainer>
				<Switch>
					<Route path={getRouteForScreenType(ScreenType.contactUs)}>
						<div style={{ padding: 100, backgroundColor: 'red' }}>
							Contact Us!
						</div>
					</Route>
					<Route path={getRouteForScreenType(ScreenType.history)}>
						<div style={{backgroundColor: 'blue', padding: 100}}>
							History!
						</div>
					</Route>
					<Route path='/:section?'>
						<HomePage />
					</Route>
				</Switch>
			</HeaderFooterContainer>
		</div>
	</Router>
}

export default App;


