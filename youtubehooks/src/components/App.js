import React, { useState, useEffect } from 'react';

import Search from './Search';
import Videolist from './Videolist';
import youtube from '../api/youtube';
import Screen from './Screen';

import '../css/App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [term, setTerm] = useState('');
  const [currentVideo, setCurrentVideo] = useState('ROnH1lHJQHE');

  useEffect(() => {
    const search = async () => {
      const { data } = await youtube.get('/search', {
        params: {
          q: term,
        },
      });
      console.log(data.items);
      setVideos(data.items);
    };
    if (!term) return;

    search();
  }, [term]);

  return (
    <div className="ui container">
      <Search setTerm={setTerm} />
      <Screen id={currentVideo} />
      <Videolist videos={videos} setCurrentVideo={setCurrentVideo} />
    </div>
  );
};

export default App;
