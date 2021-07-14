import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
  GET_ALL_STREAMS,
  GET_ONE_STREAM,
} from './types';
import streams from '../apis/streams';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const { data } = await streams.post('/streams', {
    ...formValues,
    userId,
  });

  dispatch({
    type: CREATE_STREAM,
    payload: data,
  });

  //PROGRAMMATIC NAVIGATION
  history.push('/');
};

export const getAllStreams = () => async dispatch => {
  const { data } = await streams.get('/streams');

  dispatch({
    type: GET_ALL_STREAMS,
    payload: data,
  });
};
export const getOneStream = id => async dispatch => {
  const { data } = await streams.get(`/streams/${id}`);

  dispatch({
    type: GET_ONE_STREAM,
    payload: data,
  });
};
export const updateStream = (id, values) => async dispatch => {
  const { data } = streams.put(`/streams/${id}`, values);

  dispatch({
    type: UPDATE_STREAM,
    payload: data,
  });
};
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
};
