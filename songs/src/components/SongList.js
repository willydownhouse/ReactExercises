import React from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

import '../css/style.css';

const SongList = ({ songs, selectSong }) => {
  const renderedList = songs.map(song => {
    return (
      <div key={song.title} className="item">
        <div className="content">
          <h2>{song.title}</h2>
          <button
            onClick={() => selectSong(song)}
            className="ui right floated button"
          >
            Select
          </button>
        </div>
      </div>
    );
  });
  return <div className="ui list">{renderedList}</div>;
};

const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
