import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';
import { reducer, StateProvider } from './state';

ReactDom.render(
  <StateProvider reducer={reducer}>
    <App />
  </StateProvider>,

  document.querySelector('#root')
);
