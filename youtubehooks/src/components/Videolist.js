import React from 'react';
import VideoItem from './VideoItem';

const Videolist = ({ videos, setCurrentVideo }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        setCurrentVideo={setCurrentVideo}
      />
    );
  });

  return <div className="ui list">{renderedList}</div>;
};

export default Videolist;
