import React from 'react';
import { Link } from 'react-router-dom';

import { getAllStreams } from '../../actions';
import { connect } from 'react-redux';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getAllStreams();
  }

  renderButtons(stream) {
    if (stream.userId === this.props.userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderStreamList() {
    return this.props.streams.map(stream => {
      return (
        <React.Fragment>
          <Link
            to={`streams/${stream.id}`}
            style={{ cursor: 'pointer' }}
            key={stream.id}
            className="item"
          >
            {this.renderButtons(stream)}
            <i className="large camera middle aligned icon"></i>
            <div className="content">
              <div className="header">{stream.title}</div>
              <div className="description">{stream.description}</div>
            </div>
          </Link>
        </React.Fragment>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <Link to="/streams/new">
          <button className="ui secondary button">Create Stream</button>
        </Link>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreamList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  getAllStreams,
})(StreamList);
