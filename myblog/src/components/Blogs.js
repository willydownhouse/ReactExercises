import React from 'react';
import { connect } from 'react-redux';

import { getAllBlogs } from '../actions';

class Blogs extends React.Component {
  componentDidMount() {
    this.props.getAllBlogs();
  }

  render() {
    console.log(this.props);
    if (this.props.blogs.length === 0) {
      return <div>Sign in to get access</div>;
    }

    return <div>Blogs</div>;
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
  };
};

export default connect(mapStateToProps, { getAllBlogs })(Blogs);
