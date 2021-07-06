import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const getPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(getPosts());

  const posts = getState().posts;
  // const uniqueUserIds = _.uniq(_.map(posts, 'userId'));
  // uniqueUserIds.forEach(id => dispatch(getUser(id)));

  _.chain(posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(getUser(id)))
    .value();
};

export const getPosts = () => async dispatch => {
  const { data } = await jsonPlaceHolder.get('/posts');

  dispatch({ type: 'GET_POSTS', payload: data });
};

export const getUser = id => async dispatch => {
  const { data } = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: 'GET_USER', payload: data });
};

//LODASH VERSION (JA SIKSI ETTÄ EI TULE NIIN MONTAA REQUESTIA)
// const _getUser = _.memoize(async (id, dispatch) => {
//   const { data } = await jsonPlaceHolder.get(`/users/${id}`);

//   dispatch({ type: 'GET_USER', payload: data });
// });
