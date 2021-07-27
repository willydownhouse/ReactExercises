import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import usersReducer from './usersReducer';
import blogReducer from './blogReducer';
import authReducers from './authReducers';
import errorReducer from './errorReducer';

export default combineReducers({
  users: usersReducer,
  blogs: blogReducer,
  form: formReducer,
  auth: authReducers,
  error: errorReducer,
});
