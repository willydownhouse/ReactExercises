import React from 'react';

import { Link } from 'react-router-dom';
import { getOneStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getOneStream(this.props.match.params.id);
  }

  onDeleteStream = () => {
    this.props.deleteStream(this.props.stream.id);
  };

  actions = () => {
    return (
      <React.Fragment>
        <div onClick={this.onDeleteStream} className="ui secondary button">
          Delete
        </div>
        <Link to="/" className="ui cancel button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <Modal
        header="Delete Stream"
        content={`Are you sure you want to delete stream ${this.props.stream.title}?`}
        deleteStream={this.onDeleteStream}
        toHomePage={() => history.push('/')}
        stopPropagation={e => e.stopPropagation()}
        actions={this.actions()}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getOneStream, deleteStream })(
  StreamDelete
);
