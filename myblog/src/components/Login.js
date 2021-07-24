import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import '../css/Login.css';

const Login = () => {
  return (
    <div className="login">
      <h2 className="title">Log-in to your count</h2>
      <div className="login-window">
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="text" placeholder="Password" />
            </div>
            <button className="ui fluid large red submit button">Login</button>
          </div>
        </form>
        <div className="ui message">
          New to us?<Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'login',
})(Login);
