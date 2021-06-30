import React from 'react';
import reactDom from 'react-dom';

import App from './components/App';

if (module.hot) module.hot.accept();

reactDom.render(<App />, document.getElementById('root'));
