const authReducers = (state = null, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, isSignedIn: true, token: action.payload };

    default:
      return state;
  }
};

export default authReducers;
