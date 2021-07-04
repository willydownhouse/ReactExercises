import { combineReducers } from 'redux';

export const songsReducer = () => {
  return [
    {
      title: 'PokerFace',
      duration: '4:21',
    },
    {
      title: 'BlackOrWhite',
      duration: '2:21',
    },
    {
      title: 'haloo lyngen',
      duration: '3:21',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECT_SONG') {
    selectedSong = action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
