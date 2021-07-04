import React, { useState } from 'react';

import SongList from './SongList';
import SongDetails from './SongDetails';

import '../css/style.css';

const App = () => {
  return (
    <div className="ui container">
      <SongList />
      <SongDetails />
    </div>
  );
};

export default App;
