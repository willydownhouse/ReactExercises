import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class CreateForm extends React.Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <i className="close icon"></i>
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onFormSubmit(formValues);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter description"
          />
          <button className="ui button secondary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const error = {};
  if (!formValues.title) {
    error.title = 'Stream must have a title.';
  }

  if (!formValues.description) {
    error.description = 'Stream must have a description.';
  }

  return error;
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

const formWrapped = reduxForm({
  form: 'form',
  validate,
})(CreateForm);

export default connect(mapStateToProps)(formWrapped);
