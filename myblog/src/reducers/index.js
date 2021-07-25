import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducers from './authReducers';
import errorReducer from './errorReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducers,
  error: errorReducer,
});
