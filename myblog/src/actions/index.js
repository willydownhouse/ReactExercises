import blogapi from '../apis/blogapi';
import history from '../history';

export const login = formValues => async dispatch => {
  try {
    const response = await blogapi.post('/users/login', formValues);

    dispatch({ type: 'SIGN_IN', payload: response.data });

    history.push('/blogs');
  } catch (err) {
    console.log(err.message);
    dispatch({ type: 'ERROR', payload: err.message });
  }
};

export const getAllBlogs = () => async dispatch => {
  const { data } = await blogapi.get('/blogs', {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  console.log(data);

  dispatch({ type: 'GET_ALL_BLOGS', payload: data.data });
};
