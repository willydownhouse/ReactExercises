import React from 'react';
import VideoItem from './VideoItem';

const Videolist = ({ videos, setCurrentVideo }) => {
  const renderedList = videos.map(({ snippet, id }) => {
    return (
      <VideoItem
        key={id.videoId}
        id={id.videoId}
        snippet={snippet}
        setCurrentVideo={setCurrentVideo}
      />
    );
  });

  return <div className="ui list">{renderedList}</div>;
};

export default Videolist;
