import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderedList() {
    return this.props.posts.map(post => {
      return (
        <div key={post.id} className="item">
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="header">{post.title}</div>
            <div className="description">{post.body}</div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.posts);

    if (this.props.posts.length === 0)
      return <div className="ui active centered inline loader"></div>;

    return <div className="ui relaxed divided list">{this.renderedList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  getPosts,
})(PostList);
