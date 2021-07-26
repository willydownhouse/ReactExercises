const initState = {
  message: null,
  show: false,
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ERROR':
      return { message: action.payload, show: true };
    case 'HIDE_ERROR':
      return {
        message: null,
        show: false,
      };

    default:
      return state;
  }
};

export default errorReducer;
