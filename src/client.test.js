/* global document */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

import store from './store';

it('renders without creashing', () => {
  const div = document.createElement('div');
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
