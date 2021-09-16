import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';
import { reducer, StateProvider } from './state';

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(
  <StateProvider reducer={reducer}>
    <App />
  </StateProvider>,

  document.querySelector('#root')
);
