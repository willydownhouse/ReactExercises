import React from 'react';

import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { login } from '../actions';
import '../css/Login.css';

class Login extends React.Component {
  renderFields({ input, meta, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} placeholder={label} autoComplete="off" />
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.login(formValues);
  };

  render() {
    console.log(this.props);

    return (
      <div className="login">
        <h2 className="title">Log-in to your count</h2>
        <div className="login-window">
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className="ui large form"
          >
            <div className="ui stacked segment">
              <Field name="email" component={this.renderFields} label="Email" />
              <Field
                name="password"
                component={this.renderFields}
                label="Password"
              />
              <button className="ui fluid large red submit button">
                Login
              </button>
            </div>
          </form>
          <div className="ui message">
            New to us?<Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    err: state.error,
  };
};

const formWrapped = reduxForm({
  form: 'login',
})(Login);

export default connect(mapStateToProps, { login })(formWrapped);
