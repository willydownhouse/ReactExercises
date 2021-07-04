import React from 'react';

import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
  if (!song) return null;

  return (
    <div className="songdetails">
      <h1>{song.song.title}</h1>
      <p>Length: {song.song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
