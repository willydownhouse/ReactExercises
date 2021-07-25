import blogapi from '../apis/blogapi';

export const login = formValues => async dispatch => {
  console.log(formValues);
  try {
    const response = await blogapi.post('/users/login', formValues);

    console.log(response);

    dispatch({ type: 'SIGN_IN', payload: response.data });
  } catch (err) {
    console.log(err.message);
  }
};
