import React from 'react';

import { getOneStream, updateStream } from '../../actions';
import { connect } from 'react-redux';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getOneStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) return null;

    return (
      <div className="ui celled list">
        <div className="item">
          <div className="content">
            <div className="header">{this.props.stream.title}</div>
            <div className="description">{this.props.stream.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  getOneStream,
})(StreamEdit);
