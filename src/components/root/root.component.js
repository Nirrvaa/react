import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { any } from '../../assets/json/routes';

import App from '../presentationals/app';
import store from '../../store';

import 'reset-css';
import '../../assets/styles/index.scss';

const Root = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path={any} component={App} />
            </Switch>
        </Router>
    </Provider>
);

export default Root;

