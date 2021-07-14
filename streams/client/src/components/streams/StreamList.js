import React from 'react';
import { Link } from 'react-router-dom';

import { getAllStreams, deleteStream } from '../../actions';
import { connect } from 'react-redux';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getAllStreams();
  }

  renderButtons(stream) {
    if (stream.userId === this.props.userId) {
      return (
        <div className="right floated content">
          <button className="ui button">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderStreamList() {
    console.log(this.props.streams);

    return this.props.streams.map(stream => {
      return (
        <div style={{ cursor: 'pointer' }} key={stream.id} className="item">
          {this.renderButtons(stream)}
          <i className="large camera middle aligned icon"></i>
          <div className="content">
            <div className="header">{stream.title}</div>
            <div className="description">{stream.description}</div>
          </div>
        </div>
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
