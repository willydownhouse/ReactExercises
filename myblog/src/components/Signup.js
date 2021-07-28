import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signup } from '../actions';

import Header from './Header';
import '../css/Signup.css';

class Signup extends React.Component {
  renderInput({ input, meta, label, type }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} placeholder={label} autoComplete="off" type={type} />
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.signup(formValues);
  };

  render() {
    return (
      <div>
        <Header bg="#111" logo="#fff" />
        <div className="signup">
          <h2 className="title">Create your account</h2>
          <div className="signup-window">
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form"
            >
              <div className="ui stacked segment">
                <Field
                  type="email"
                  name="email"
                  component={this.renderInput}
                  label="Email"
                />
                <Field
                  name="password"
                  component={this.renderInput}
                  label="Password"
                />
                <Field
                  name="confirmPassword"
                  component={this.renderInput}
                  label="Confirm password"
                />
                <button className="ui red submit button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const formWrapped = reduxForm({
  form: 'signup',
})(Signup);

export default connect(null, { signup })(formWrapped);
