import React from 'react';

const VideoCard = props => {
  return (
    <li>
      <div className="video-card-div">
        <img src={props.snippet.thumbnails.medium.url} />
        <p>{props.snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoCard;
