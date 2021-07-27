const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ONE_USER':
      return [...state, action.payload];

    default:
      return state;
  }
};

export default usersReducer;
