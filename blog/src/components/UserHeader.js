import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.userId);
  }

  render() {
    const user = this.props.users.find(user => user.id === this.props.userId);

    if (!user) return null;

    return <div className="header">Author: {user.name}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { users: state.users };
};

export default connect(mapStateToProps, {
  getUser,
})(UserHeader);
