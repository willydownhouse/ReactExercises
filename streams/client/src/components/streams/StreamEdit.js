import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { getOneStream, updateStream } from '../../actions';
import { connect } from 'react-redux';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getOneStream(this.props.match.params.id);
  }

  renderInput({ input, label, meta, placeholder }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" placeholder={placeholder} />
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.updateStream(this.props.match.params.id, formValues);
    console.log('should be updated');
  };

  render() {
    console.log(this.props);

    if (!this.props.stream) return null;

    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter title"
          placeholder={this.props.stream.title}
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
          placeholder={this.props.stream.description}
        />
        <button className="ui button secondary">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

const formWrapped = reduxForm({
  form: 'editForm',
})(StreamEdit);

export default connect(mapStateToProps, {
  getOneStream,
  updateStream,
})(formWrapped);
