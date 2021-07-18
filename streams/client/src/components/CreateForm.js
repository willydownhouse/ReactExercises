import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class CreateForm extends React.Component {
  renderInput({ input, meta, label, placeholder = '' }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" placeholder={placeholder} />
      </div>
    );
  }

  onSubmit = formValues => {
    console.log(formValues);
    this.props.onFormSubmit(this.props.StreamId, formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field
          name={this.props.title1}
          component={this.renderInput}
          label={this.props.title1}
          placeholder={this.props.placeholder1}
        />
        <Field
          name={this.props.title2}
          component={this.renderInput}
          label={this.props.title2}
          placeholder={this.props.placeholder2}
        />
        <button className="ui button secondary">Submit</button>
      </form>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     stream: state.streams,
//   };
// };

// const formWrapper = reduxForm({
//   form: 'form',
// })(CreateForm);

export default reduxForm({
  form: 'form',
})(CreateForm);
