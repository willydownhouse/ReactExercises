import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const getPosts = () => async dispatch => {
  const { data } = await jsonPlaceHolder.get('/posts');

  dispatch({ type: 'GET_POSTS', payload: data });
};

export const getUser = id => async dispatch => {
  const { data } = await jsonPlaceHolder.get(`/users/${id}`);

  console.log(data);

  dispatch({ type: 'GET_USER', payload: data });
};
