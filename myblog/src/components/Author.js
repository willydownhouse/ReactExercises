import React from 'react';
import { connect } from 'react-redux';

const Author = props => {
  if (!props.user) return null;
  return (
    <div>Author: {`${props.user.first_name} ${props.user.last_name}`}</div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user._id === ownProps.authorId) };
};

export default connect(mapStateToProps)(Author);
