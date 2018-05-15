import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../presentationals/app';
import store from '../../store';

import 'reset-css';
import '../../assets/styles/index.scss';

const Root = () => (
    <Provider store={store}>
        <Router>
            <Route path='/' component={App} />
        </Router>
    </Provider>
);

export default Root;

