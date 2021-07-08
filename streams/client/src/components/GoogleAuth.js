import React from 'react';
import { signIn, signOut } from '../actions';
import { connect } from 'react-redux';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '243766038603-qr4ks40p5e405brhqj8api6d7pjh195q.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    console.log(isSignedIn);
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }

    if (this.props.isSignedIn) {
      return (
        <button onClick={this.auth.signOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    }

    return (
      <button onClick={this.auth.signIn} className="ui red google button">
        <i className="google icon" />
        Sign In with Google
      </button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
})(GoogleAuth);
