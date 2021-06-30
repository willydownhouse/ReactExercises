import React from 'react';
import '../css/VideoItem.css';

const VideoItem = ({ id, snippet, setCurrentVideo }) => {
  return (
    <div className="item" onClick={() => setCurrentVideo(id)}>
      <img
        className="ui image"
        alt={snippet.title}
        src={snippet.thumbnails.medium.url}
      />
      <div className="content">
        <h3 className="header">{snippet.title}</h3>
        <div className="description">{snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
