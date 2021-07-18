import React from 'react';

import { getOneStream, updateStream } from '../../actions';
import { connect } from 'react-redux';
import CreateForm from '../CreateForm';

//Tarkista että vain oman streamin voi päivittää
//lisää userId steittiin

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getOneStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) return <div>Loading...</div>;

    return (
      <CreateForm
        title1="title"
        title2="description"
        placeholder1={this.props.stream.title}
        placeholder2={this.props.stream.description}
        onFormSubmit={this.props.updateStream}
        StreamId={this.props.stream.id}
      />
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
  updateStream,
})(StreamEdit);
