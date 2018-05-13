import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from '../components/presentationals/app';
import store from '../store';

import 'reset-css';
import '../assets/styles/index.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);