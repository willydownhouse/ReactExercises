import React from 'react';
import VideoCard from './VideoCard';

import '../css/VideoList.css';

const VideoList = props => {
  console.log(props.videos);

  const videos = props.videos.map(video => {
    return (
      <VideoCard
        onVideoSelect={props.onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });

  return (
    <div className="video-list">
      <ul className="list">{videos}</ul>
    </div>
  );
};

export default VideoList;
