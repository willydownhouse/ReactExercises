// componentDidMount() {
//     window.gapi.load('client:auth2', () => {
//       window.gapi.client
//         .init({
//           clientId:
//             '243766038603-qr4ks40p5e405brhqj8api6d7pjh195q.apps.googleusercontent.com',
//           scope: 'email',
//         })
//         .then(() => {
//           this.auth = window.gapi.auth2.getAuthInstance();
//           this.onAuthChange(this.auth.isSignedIn.get());
//           this.auth.isSignedIn.listen(this.onAuthChange);
//         });
//     });
//   }

//   onAuthChange = isSignedIn => {
//     console.log(isSignedIn);
//     if (isSignedIn) {
//       this.props.signIn();
//     } else {
//       this.props.signOut();
//     }
//   };

//   renderAuthButton() {
//     if (this.props.isSignedIn === null) {
//       return null;
//     }

//     if (this.props.isSignedIn) {
//       return (
//         <button onClick={this.auth.signOut} className="ui red google button">
//           <i className="google icon" />
//           Sign Out
//         </button>
//       );
//     }

//     return (
//       <button onClick={this.auth.signIn} className="ui red google button">
//         <i className="google icon" />
//         Sign In with Google
//       </button>
//     );
//   }

//   render() {
//     return <div>{this.renderAuthButton()}</div>;
//   }

//   const mapStateToProps = state => {
//     return {
//       isSignedIn: state.auth.isSignedIn,
//     };
//   };

//   export default connect(mapStateToProps, {
//     signIn,
//     signOut,
//   })(GoogleAuth);

// export const signIn = () => {
//     return {
//       type: 'SIGN_IN',
//     };
//   };
//   export const signOut = () => {
//     return {
//       type: 'SIGN_OUT',
//     };
//   };

// const INTIAL_STATE = {
//     isSignedIn: null,
//   };

//   const authReducer = (state = INTIAL_STATE, action) => {
//     switch (action.type) {
//       case 'SIGN_IN':
//         return { ...state, isSignedIn: true };
//       case 'SIGN_OUT':
//         return { ...state, isSignedIn: false };
//       default:
//         return state;
//     }
//   };

//   export default authReducer;

// import { combineReducers } from 'redux';
// import authReducer from './authReducer';

// export default combineReducers({
//   auth: authReducer,
// });
