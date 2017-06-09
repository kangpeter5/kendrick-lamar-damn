import React from 'react';
import { Router, Route } from 'react-router';
import Welcome from './components/Welcome';
import Home from './components/Home';
import About from './components/About';

export default (
	<Router>
		<Route path={'/'} component={Welcome} />
		<Route path={'home'} component={Home} />
		<Route path={'home/about'} component={About} />
	</Router>
)