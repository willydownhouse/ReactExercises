import React from 'react';
import '../css/VideoItem.css';

const VideoItem = ({ video, setCurrentVideo }) => {
  return (
    <div className="item" onClick={() => setCurrentVideo(video)}>
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <h3 className="header">{video.snippet.title}</h3>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
