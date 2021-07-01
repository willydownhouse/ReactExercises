import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = term => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  useEffect(() => {
    if (!term) return;

    search(term);
  }, [term]);

  const search = async term => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(data.items);
    setCurrentVideo(data.items[0]);
  };

  return [videos, currentVideo, setCurrentVideo, search];
};

export default useVideos;
