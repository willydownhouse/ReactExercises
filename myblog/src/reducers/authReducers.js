const initState = {
  isSignedIn: null,
};

const authReducers = (state = initState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      sessionStorage.setItem('token', action.payload.token);
      return { ...state, userId: action.payload.userId, isSignedIn: true };

    case 'SIGN_UP':
      sessionStorage.setItem('token', action.payload.token);
      return {
        ...state,
        userId: action.payload.userId,
        isSignedIn: true,
      };
    case 'SIGN_OUT':
      sessionStorage.removeItem('token');
      return { ...state, isSignedIn: false };

    default:
      return state;
  }
};

export default authReducers;
