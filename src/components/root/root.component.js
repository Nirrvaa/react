import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ANY } from '../../assets/json/routes';

import RoutingApp from '../containers/routing-app';
import store from '../../store';

import 'reset-css';
import '../../assets/styles/index.scss';

const Root = () => (
	<Provider store={store}>
		<Router>
			<Route path='/:base?/:filter?' component={RoutingApp} />
		</Router>
	</Provider>
);

export default Root;

