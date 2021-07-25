const authReducers = (state = null, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      sessionStorage.setItem('token', action.payload.token);
      return { ...state, isSignedIn: true };

    default:
      return state;
  }
};

export default authReducers;
