//action creator, returns an ACTION
export const selectSong = song => {
  return {
    type: 'SELECT_SONG',
    payload: {
      song,
    },
  };
};
