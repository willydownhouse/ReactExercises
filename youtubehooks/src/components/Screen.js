import React from 'react';
import '../css/Screen.css';

const Screen = ({ id }) => {
  return (
    <div className="screen">
      <iframe
        title="video player"
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe>
    </div>
  );
};

export default Screen;
