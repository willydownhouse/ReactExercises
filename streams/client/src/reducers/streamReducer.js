import _ from 'lodash';
import {
  CREATE_STREAM,
  GET_ALL_STREAMS,
  GET_ONE_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
} from '../actions/types';

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case GET_ONE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default streamReducer;
