import React from 'react';
import VideoCard from './VideoCard';

const VideoList = props => {
  console.log(props.videos);

  const videos = props.videos.map(({ id, snippet }) => {
    return <VideoCard key={id.videoId} snippet={snippet} />;
  });

  return <ul className="list">{videos}</ul>;
};

export default VideoList;
