import React from 'react';
import '../css/Screen.css';

const Screen = ({ video }) => {
  if (!video) return null;

  return (
    <div className="screen">
      <iframe
        title="video player"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
      ></iframe>
    </div>
  );
};

export default Screen;
