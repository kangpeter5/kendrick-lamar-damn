import React from 'react';
import { Router, Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default (
	<Router>
		<Route path={'/'} component={App} />
		<Route path={'home'} component={Home} />
	</Router>
)