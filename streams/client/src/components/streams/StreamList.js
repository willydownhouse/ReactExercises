import React from 'react';
import { Link } from 'react-router-dom';

import { getAllStreams } from '../../actions';
import { connect } from 'react-redux';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getAllStreams();
  }

  renderStreamList() {
    console.log(this.props.streams);

    return this.props.streams.map(stream => {
      return (
        <Link
          to={`/streams/show/${stream.id}`}
          style={{ cursor: 'pointer' }}
          onClick={() => console.log(stream.id)}
          key={stream.id}
          className="item"
        >
          <i className="large camera middle aligned icon"></i>
          <div className="content">
            <div className="header">{stream.title}</div>
            <div className="description">{stream.description}</div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreamList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, {
  getAllStreams,
})(StreamList);
