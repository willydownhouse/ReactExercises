import React from 'react';
import '../css/VideoScreen.css';

const VideoScreen = props => {
  console.log(props.video);

  if (!props.video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="video-screen">
      <div className="media-player">
        <div className="screen">
          <video></video>
        </div>
        <div className="controller">
          <div className="controller-btns">
            <i className="fas fa-play-circle fa-2x"></i>
            <i className="fas fa-pause-circle fa-2x"></i>
          </div>
          <progress id="file" value="32" max="100"></progress>
        </div>
      </div>
      <div className="details">
        <h2>{props.video.snippet.title}</h2>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoScreen;
