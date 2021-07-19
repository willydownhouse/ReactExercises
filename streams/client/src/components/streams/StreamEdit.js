import React from 'react';
import { connect } from 'react-redux';

import CreateForm from '../CreateForm';
import { getOneStream, updateStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getOneStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.updateStream(this.props.stream.id, formValues);
  };

  render() {
    if (!this.props.stream) return <div>Loading...</div>;

    return (
      <div>
        <h2>Update a stream</h2>
        <CreateForm
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description,
          }}
          onFormSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getOneStream, updateStream })(
  StreamEdit
);
