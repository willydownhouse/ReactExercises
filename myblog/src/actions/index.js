import _ from 'lodash';
import blogapi from '../apis/blogapi';
import history from '../history';

export const signup = formValues => async dispatch => {
  try {
    const response = await blogapi.post('users/signup', formValues);

    console.log(response.data);

    dispatch({ type: 'SIGN_UP', payload: response.data });

    history.push('/blogs');
  } catch (err) {
    console.log(err.response);
    alert(err.response.data.message);
    dispatch({ type: 'ERROR', payload: err.response.data.message });
  }
};

export const login = formValues => async dispatch => {
  try {
    const response = await blogapi.post('/users/login', formValues);

    console.log(response.data);

    dispatch({ type: 'SIGN_IN', payload: response.data });

    history.push('/blogs');
  } catch (err) {
    alert(err.response.data.message);
    dispatch({ type: 'ERROR', payload: err.response.data.message });
  }
};

export const logout = () => {
  history.push('/');
  return {
    type: 'SIGN_OUT',
  };
};

export const getAllBlogs = () => async dispatch => {
  const { data } = await blogapi.get('/blogs?sort=-createdAt', {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  dispatch({ type: 'GET_ALL_BLOGS', payload: data.data });
};

export const getUser = id => async dispatch => {
  try {
    const { data } = await blogapi.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    });

    dispatch({ type: 'GET_ONE_USER', payload: data.data.doc });
  } catch (err) {
    alert(err.response.data.message);
    dispatch({ type: 'ERROR', payload: err.response.data.message });
  }
};

export const getBlogsAndUsers = () => async (dispatch, getState) => {
  await dispatch(getAllBlogs());

  const blogs = getState().blogs;

  _.chain(blogs)
    .map('author')
    .uniq()
    .forEach(id => dispatch(getUser(id)))
    .value();
};

export const filterBlogsByType = type => async dispatch => {
  const { data } = await blogapi.get(`/blogs?type=${type}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  dispatch({
    type: 'FILTER_BLOGS_BY_TYPE',
    payload: data.data,
  });
};
