import React from 'react';

import CreateForm from '../CreateForm';
import { createStream } from '../../actions';
import { connect } from 'react-redux';

class StreamCreate extends React.Component {
  render() {
    return (
      <div>
        <h2>Create a stream</h2>
        <CreateForm onFormSubmit={this.props.createStream} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
