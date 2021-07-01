import React, { useState, useEffect } from 'react';

import Search from './Search';
import Videolist from './Videolist';
import Screen from './Screen';
import useVideos from '../hooks/useVideos';

import '../css/App.css';

const App = () => {
  const [term, setTerm] = useState('lyngen');
  const [videos, currentVideo, setCurrentVideo] = useVideos(term);

  return (
    <div className="ui container">
      <Search setTerm={setTerm} setCurrentVideo={setCurrentVideo} />
      <Screen video={currentVideo} />
      <Videolist videos={videos} setCurrentVideo={setCurrentVideo} />
    </div>
  );
};

export default App;
