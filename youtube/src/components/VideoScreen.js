import React from 'react';
import '../css/VideoScreen.css';

const VideoScreen = props => {
  if (!props.video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div className="video-screen">
      <div className="media-player">
        <iframe title="player" className="iframe" src={videoSrc} />
      </div>
      <div className="details">
        <h2>{props.video.snippet.title}</h2>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoScreen;
