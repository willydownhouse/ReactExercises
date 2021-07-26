import blogapi from '../apis/blogapi';
import history from '../history';

export const signup = formValues => async dispatch => {
  try {
    const response = await blogapi.post('users/signup', formValues);

    console.log(response);

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

    dispatch({ type: 'SIGN_IN', payload: response.data });

    history.push('/blogs');
  } catch (err) {
    alert(err.response.data.message);
    dispatch({ type: 'ERROR', payload: err.response.data.message });
  }
};

export const logout = () => {
  console.log('from logout');
  return {
    type: 'SIGN_OUT',
  };
};

export const getAllBlogs = () => async dispatch => {
  const { data } = await blogapi.get('/blogs', {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });
  dispatch({ type: 'GET_ALL_BLOGS', payload: data.data });
};
