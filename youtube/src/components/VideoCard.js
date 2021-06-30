import React from 'react';
import '../css/VideoCard.css';

const VideoCard = props => {
  return (
    <li>
      <div
        onClick={() => props.onVideoSelect(props.video)}
        className="video-card-div"
      >
        <img alt="img" src={props.video.snippet.thumbnails.medium.url} />
        <div className="description">
          <h2>{props.video.snippet.channelTitle.toUpperCase()}</h2>
          <p>{props.video.snippet.title}</p>
          <p>
            Published:
            {new Date(props.video.snippet.publishTime).toLocaleDateString()}
          </p>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;
