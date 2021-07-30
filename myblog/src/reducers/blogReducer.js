const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_BLOGS':
      return action.payload;
    case 'FILTER_BLOGS_BY_TYPE':
      return action.payload;
    default:
      return state;
  }
};

export default blogReducer;
