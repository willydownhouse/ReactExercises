import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import blogReducer from './blogReducer';
import authReducers from './authReducers';
import errorReducer from './errorReducer';

export default combineReducers({
  blogs: blogReducer,
  form: formReducer,
  auth: authReducers,
  error: errorReducer,
});
