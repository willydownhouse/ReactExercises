import React from 'react';

const SongDetails = ({ song }) => {
  if (!song) return null;

  return (
    <div className="songdetails">
      <h1>{song.title}</h1>
      <p>Length: {song.length}</p>
    </div>
  );
};

export default SongDetails;
